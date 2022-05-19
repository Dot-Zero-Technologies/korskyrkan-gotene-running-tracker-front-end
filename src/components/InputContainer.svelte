<script lang="ts">
	import Input from './Input.svelte';
	import InputLabel from './InputLabel.svelte';
	export let label: string;
	export let id: string;
	export let value: string;

	interface $$Props extends Partial<HTMLInputElement> {
		label: string;
		id: string;
		value: string;
	}
</script>

<div class="input-container">
	<InputLabel for_id={id}>{label}</InputLabel>
	<Input bind:value {id} {...$$restProps} />
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
</style>
