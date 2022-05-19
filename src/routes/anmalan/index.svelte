<script lang="ts">
	import InputContainer from '../../components/InputContainer.svelte';
</script>

<!-- Header -->
<!-- Main -->
<div class="container">
	<main>
		<h3>Löpare</h3>
		<InputContainer type="text" label="Namn" id="name" value="" />
		<InputContainer type="tel" label="Telefonnummer" id="phone" value="" />

		<h3>Sponsor</h3>
		<InputContainer type="text" label="Namn" id="sponsorName" value="" />
		<InputContainer type="tel" label="Telefonnummer" id="sponsorPhone" value="" />
		<InputContainer
			type="number"
			label="Sponsrad summa (kr)"
			id="sponsorAmount"
			value=""
			info="Summa (i kr) som sponsras per varv som löparen springer."
		/>
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
