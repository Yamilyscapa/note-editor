<script>
	let { current } = $props();
</script>

<div class="note" {current}>
	<h2>Note title</h2>
	<p>Note content</p>
</div>

<style lang="scss">
	.note {
		h2 {
			font-size: 1.25rem;
		}

		border-bottom: 1px solid #fff;
		font-size: 0.9rem;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		padding: 1rem;
		height: 5rem;
		cursor: pointer;

		&:first-of-type {
			border-top: 1px solid #fff;
		}

		&[current] {
			background: #00000008;
		}
	}
</style>
