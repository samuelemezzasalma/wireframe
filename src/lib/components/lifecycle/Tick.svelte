<script lang="ts">
    import { tick } from "svelte";


	let text = `Select some text and hit the tab key to toggle uppercase`;

  let textarea: HTMLTextAreaElement;

	async function handleKeydown(event: KeyboardEvent) {
		if (event.key !== 'Tab') return;

		event.preventDefault();

		const {
			selectionStart,
			selectionEnd,
			value
		} = textarea;
		const selection = value.slice(
			selectionStart,
			selectionEnd
		);

		const replacement = /[a-z]/.test(selection)
			? selection.toUpperCase()
			: selection.toLowerCase();

		text =
			value.slice(0, selectionStart) +
			replacement +
			value.slice(selectionEnd);

		// this has no effect, because the DOM hasn't updated yet
    await tick()
		textarea.selectionStart = selectionStart;
		textarea.selectionEnd = selectionEnd;
	}
</script>

<textarea
  bind:this={textarea}
	value={text}
	on:keydown={handleKeydown}
/>

<style>
	textarea {
		width: 100%;
		height: 200px;
	}
</style>
