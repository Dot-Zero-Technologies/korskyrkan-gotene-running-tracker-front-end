<script lang="ts">
	export let title: string
	export let href: string
	export let active: boolean
</script>

<a class="container {active ? 'active' : ''}" {href}>
	<span class="title">{title}</span>
</a>

<style>
	.container {
		position: relative;
		display: block;
		height: 100%;
		padding: 0 14px;
		text-decoration: none;
	}

	.title {
		font-family: 'Open Sans', arial, sans-serif;
		font-size: 14px;
		text-transform: uppercase;
		color: #000;
		font-weight: 700;
		line-height: 48px;
		box-sizing: border-box;
	}

	.container::after {
		content: '';
		display: block;
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 0%;
		height: 4px;
		background-color: #4db2ec;
		transition: 0.2s width ease;
	}

	.container.active::after,
	.container:hover::after {
		width: 100%;
	}
</style>
