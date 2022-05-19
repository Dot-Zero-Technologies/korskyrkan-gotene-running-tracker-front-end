<script lang="ts">
	export let text: string
</script>

<button on:click>{text}</button>

<style>
	button {
		font-size: 1rem;
		font-weight: 500;
		font-family: inherit;
		padding: 0.6rem 0.8rem;
		border: 1px solid #ccc;
		border-radius: 0.2rem;
		background-color: #1a73e8;
		margin: 1rem 0;
		color: #fff;
		transition: border-color 0.2s ease-in-out, background-color 0.3s ease-out;
		box-sizing: border-box;
		width: 100%;
		cursor: pointer;
	}

	button:hover {
		background-color: #2e80ea;
		border-color: #2e80ea;
	}

	button:focus {
		outline: none;
		border-color: #aab;
	}
</style>
