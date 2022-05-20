<script lang="ts">
	import Indent from '../../components/Indent.svelte'
	import InputContainer from '../../components/InputContainer.svelte'
	import Button from '../../components/Button.svelte'
	import Header from '../../components/Header.svelte'

	let runnerName: string = ''
	let runnerPhone: string = ''
	let sponsorName: string = ''
	let sponsorPhone: string = ''
	let sponsorAmount: number = 0

	const sendRegistration = () => {
		console.log(runnerName, runnerPhone, sponsorName, sponsorPhone, sponsorAmount)
	}
</script>

<!-- Header -->
<Header />

<!-- Main -->
<div class="container">
	<main>
		<h3>Löpare</h3>
		<Indent>
			<InputContainer type="text" label="Namn" id="name" bind:value={runnerName} />
			<InputContainer type="tel" label="Telefonnummer" id="phone" bind:value={runnerPhone} />
		</Indent>

		<h3>Sponsor</h3>
		<Indent>
			<InputContainer type="text" label="Namn" id="sponsorName" bind:value={sponsorName} />
			<InputContainer
				type="tel"
				label="Telefonnummer"
				id="sponsorPhone"
				bind:value={sponsorPhone}
			/>
			<InputContainer
				type="number"
				label="Sponsrad summa (kr)"
				id="sponsorAmount"
				bind:value={sponsorAmount}
				info="Summa (i kr) som sponsras per varv som löparen springer."
			/>

			<Button text="Skicka anmälan" on:click={sendRegistration} />
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
