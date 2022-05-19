<script lang="ts">
	export let for_id: string;
</script>

<label for={for_id}><slot /></label>

<style>
	label {
		font-size: 0.9rem;
		font-weight: 500;
		margin-bottom: 0.5rem;
		width: 100%;
	}
</style>
