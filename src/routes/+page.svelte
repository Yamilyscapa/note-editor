<script>
	import '../global.scss';
	import Note from '../components/Note.svelte';
	import Panel from '../components/Panel.svelte';
	import PanelBottom from '../components/PanelBottom.svelte';
	import writtingHandler from '../controllers/writing';
	let content = $state({ title: 'New note', note: [] });

	function saveNote() {
		// TODO: Make API connection (or fake database in local storage lol)
	}
</script>

<svelte:head>
	<title>{content.title}</title>
</svelte:head>

<div class="container">
	<section class="panel">
		<h2>Note App</h2>

		<div class="panel-container">
			<Note current />
			<Note />
			<Note />
		</div>
	</section>

	<section class="note">
		<div
			id="textEditor"
			class="note-editor"
			data-placeholder="Comienza a escribir..."
			contenteditable
			tabindex="0"
			role="textbox"
			oninput={(e) => {
				content.note = writtingHandler(e);
			}}
		></div>
	</section>
</div>

<PanelBottom noteContent={content} />

<style lang="scss">
	.container {
		display: flex;
		height: 100vh;
	}

	.panel {
		height: 100%;
		padding: 0;
		max-height: 100vh;
		width: 15rem;
		background: #0000000a;

		h2 {
			margin: 1rem;
		}

		&-container {
			display: grid;
			grid-auto-rows: min-content;
			flex-direction: column;
			overflow-y: auto;
			white-space: nowrap;
		}

		&::-webkit-scrollbar {
			display: none;
		}
	}

	.note-editor {
		padding: 2.5rem 2rem;
		cursor: text;
		outline: none;

		&:before {
			content: attr(data-placeholder);
			color: #323232;
		}

		&:not(:empty):before {
			content: '';
		}
	}
</style>
