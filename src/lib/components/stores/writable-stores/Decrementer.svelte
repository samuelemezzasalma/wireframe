<script lang="ts">
  import { count } from "./stores";

  function decrement() {
    count.update((count_value) => count_value - 1)
  }
</script>

<button on:click={decrement}> - </button>
