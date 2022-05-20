<script lang="ts">
	export let value: string
	export let className: string = ''
	export let error: boolean = false
	export let disabled: boolean = false

	interface $$Props extends Partial<HTMLInputElement> {
		value: string
		className?: string
		error: boolean
	}
</script>

<input on:click class={className + (error ? ' error' : '')} bind:value {...$$props} {disabled} />

<style>
	input {
		font-size: 1rem;
		padding: 0.5rem 0.8rem;
		border: 1px solid #ccc;
		border-radius: 0.2rem;
		margin-bottom: 0.5rem;
		background-color: var(--primary-background);
		transition: border-color 0.2s ease-in-out, background-color 0.3s ease-out;
		box-sizing: border-box;
		width: 100%;
	}

	input.error,
	input.error:focus {
		border-color: red;
		border-right-color: red !important;
	}

	input:focus {
		outline: none;
		border-color: #aab;
	}

	input[type='submit'],
	input[type='button'] {
		cursor: pointer;
		width: auto;
		padding: 0.8rem 1rem;
	}

	input[type='submit'] {
		font-weight: 600;
	}

	input[type='submit']:hover,
	input[type='button']:hover {
		background-color: var(--primary-accent);
		border-color: var(--primary-accent);
	}

	input[type='submit'].full-width,
	input[type='button'].full-width {
		width: 100%;
	}
</style>
