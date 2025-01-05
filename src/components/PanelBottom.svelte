<script>
	const { noteContent } = $props();

	async function handleSave(content) {
		const { title, note } = content;
		const params = { method: 'GET' };
		const res = await fetch('/api', params);
		const data = await res.json();
		console.log(data);
	}
</script>

<div class="bottom-panel">
	<div class="bottom-panel-container">
		<button onclick={() => handleSave(noteContent)} class="btn btn-save">Save</button>
		<button class="btn btn-cancel">Cancel</button>
	</div>
</div>

<style lang="scss">
	.bottom-panel {
		padding: 0 5rem;
		width: 100%;
		height: 7rem;
		bottom: 0;
		position: fixed;
		display: flex;
		justify-content: right;
		align-items: center;

		&-container {
			display: inherit;
			gap: 0.5rem;
		}
	}

	.btn {
		font-family: inherit;
		font-size: 0.9rem;
		display: block;
		background: #e4e4e4;
		outline: none;
		border: none;
		padding: 0.75rem 3rem;
		border-radius: 0.5rem;

		&:hover {
			cursor: pointer;
			opacity: 85%;
		}

		&-save {
			background: rgb(78, 78, 255);
			color: #fafafa;
		}

		&-cancel {
			margin-left: 0.8rem;
		}
	}
</style>
