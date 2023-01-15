<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function sayHello() {
    dispatch(`message`, {
      text: `Hello!`,
    });
  }
</script>

<!-- --- HTML ---  -->
<button on:click={sayHello}>Hello</button>
<!-- --- HTML ---  -->
<style>
</style>
