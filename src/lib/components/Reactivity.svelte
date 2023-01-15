<script lang="ts">
  let count = 0;
  $: doubled = count * 2;

  /* $: {
    console.log(`the count is ${count}`);
    alert(`I SAID THE COUNT IS ${count}`);
  } */

  $: if (count >= 10) {
    alert(`count is dangerously high!`);
    count = 0;
  }
  function increment() {
    count += 1;
  }
</script>


<!-- --- HTML ---  -->

<h1>Reactivity statements and expressions</h1>

<button on:click={increment}>Clicked {count} {count !== 1? 'times' : 'time'}</button>

<p>{count} doubled is {doubled}</p>

<!-- --- HTML ---  -->


<style>
</style>
