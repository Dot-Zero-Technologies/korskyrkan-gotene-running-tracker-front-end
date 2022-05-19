<script lang="ts">
	import Logo from './Logo.svelte'
</script>

<div class="container">
	<header>
		<div class="logo"><Logo /></div>
	</header>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		width: 100%;
		height: auto;
	}

	header {
		display: block;
		padding: 1rem;
		width: 100%;
		max-width: 80rem;
	}
</style>
