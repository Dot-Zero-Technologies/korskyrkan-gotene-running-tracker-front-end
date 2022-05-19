<script lang="ts">
	import Logo from './Logo.svelte'
	import Nav from './Nav.svelte'
	import NavItem from './NavItem.svelte'
</script>

<div class="container">
	<header>
		<div class="logo"><Logo /></div>
		<Nav>
			<NavItem title="Hem" href="/" active={true} />
			<NavItem title="På Gång" href="/" active={false} />
		</Nav>
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
