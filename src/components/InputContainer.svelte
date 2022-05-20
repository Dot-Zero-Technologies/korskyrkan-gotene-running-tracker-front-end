<script lang="ts">
	import Input from './Input.svelte'
	import InputLabel from './InputLabel.svelte'
	export let label: string
	export let id: string
	export let value: string
	export let info: string = ''

	interface $$Props extends Partial<HTMLInputElement> {
		label: string
		id: string
		value: string
		disabled: boolean
	}
</script>

<div class="input-container">
	<InputLabel for_id={id}>{label}</InputLabel>
	<Input bind:value {id} {...$$restProps} />

	{#if info.length > 0}
		<i class="info">{info}</i>
	{/if}
</div>

<style>
	.input-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		margin-top: 0.5rem;
	}

	.info {
		font-size: 0.8rem;
		font-weight: 500;
		margin-top: 0.1rem;
		width: 100%;
		padding: 0 0.5rem;
		box-sizing: border-box;
	}
</style>
