<script lang="ts">
	import InputContainer from '../../components/InputContainer.svelte';
</script>

<!-- Header -->
<!-- Main -->
<div class="container">
	<main>
		<InputContainer label="Namn" id="name" value="" />
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
	}
</style>
