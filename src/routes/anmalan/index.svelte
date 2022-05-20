<script lang="ts">
	import Indent from '../../components/Indent.svelte'
	import InputContainer from '../../components/InputContainer.svelte'
	import Button from '../../components/Button.svelte'
	import Header from '../../components/Header.svelte'
	import sendRegistration from '../../lib/sendRegistration.js'

	// Bind all form input values.
	let runnerName: string = ''
	let runnerPhone: string = ''
	let sponsorName: string = ''
	let sponsorPhone: string = ''
	let sponsorAmount: number = 0

	// Disable all form inputs.
	let disableAllInput: boolean = false
	$: console.log(disableAllInput)

	// Handle submit click.
	const submitClick = async () => {
		// Disable all inputs.
		disableAllInput = true

		// Send registration request.
		const status = await sendRegistration(
			runnerName,
			runnerPhone,
			sponsorName,
			sponsorPhone,
			sponsorAmount
		)

		// Check if registration was successful.
		if (status.status === 200) {
			// Display success message.
			console.info('Registration successful!')
		}

		// Check if registration was unsuccessful.
		if (status.status !== 200) {
			// Enable all inputs.
			disableAllInput = false

			// Display error message.
			console.error('Registration unsuccessful!\n' + status.statusText)
		}
	}
</script>

<!-- Header -->
<Header />

<!-- Main -->
<div class="container">
	<main>
		<h3>Löpare</h3>
		<Indent>
			<InputContainer
				type="text"
				label="Namn"
				id="name"
				disabled={disableAllInput}
				bind:value={runnerName}
			/>
			<InputContainer
				type="tel"
				label="Telefonnummer"
				id="phone"
				disabled={disableAllInput}
				bind:value={runnerPhone}
			/>
		</Indent>

		<h3>Sponsor</h3>
		<Indent>
			<InputContainer
				type="text"
				label="Namn"
				id="sponsorName"
				disabled={disableAllInput}
				bind:value={sponsorName}
			/>
			<InputContainer
				type="tel"
				label="Telefonnummer"
				id="sponsorPhone"
				disabled={disableAllInput}
				bind:value={sponsorPhone}
			/>
			<InputContainer
				type="number"
				label="Sponsrad summa (kr)"
				id="sponsorAmount"
				disabled={disableAllInput}
				bind:value={sponsorAmount}
				info="Summa (i kr) som sponsras per varv som löparen springer."
			/>

			<Button text="Skicka anmälan" on:click={submitClick} />
		</Indent>
	</main>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		background-color: #eee;
	}

	.container {
		display: flex;
		justify-content: center;
		width: 100%;
		height: auto;
	}

	main {
		padding: 1rem;
		max-width: 20rem;
	}
</style>
