<script lang="ts">
	import { count } from './stores';

	function increment() {
		count.update((count_value) => count_value +1)
	}
</script>

<button on:click={increment}> + </button>
