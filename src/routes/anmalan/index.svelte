<script lang="ts">
	import Indent from '../../components/Indent.svelte'
	import InputContainer from '../../components/InputContainer.svelte'
	import Button from '../../components/Button.svelte'
</script>

<!-- Header -->
<!-- Main -->
<div class="container">
	<main>
		<h3>Löpare</h3>
		<Indent>
			<InputContainer type="text" label="Namn" id="name" value="" />
			<InputContainer type="tel" label="Telefonnummer" id="phone" value="" />
		</Indent>

		<h3>Sponsor</h3>
		<Indent>
			<InputContainer type="text" label="Namn" id="sponsorName" value="" />
			<InputContainer type="tel" label="Telefonnummer" id="sponsorPhone" value="" />
			<InputContainer
				type="number"
				label="Sponsrad summa (kr)"
				id="sponsorAmount"
				value=""
				info="Summa (i kr) som sponsras per varv som löparen springer."
			/>

			<Button text="Skicka anmälan" />
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
