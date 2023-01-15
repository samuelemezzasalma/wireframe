<script lang="ts">
  let a = 1;
  let b = 2;
</script>

<!-- --- HTML ---  -->
<label>
  <!-- 
		value={a} -->
  <input type="number" bind:value={a} min="0" max="10" />

  <!-- 
		value={a} -->
  <input type="range" bind:value={a} min="0" max="10" />
</label>

<label>
  <!-- 
		value={b} -->
  <input type="number" bind:value={b} min="0" max="10" />

  <!-- type="range"
		value={b} -->
  <input type="range" bind:value={b} min="0" max="10" />
</label>

<p>{a} + {b} = {a + b}</p>

<!-- --- HTML ---  -->
<style>
  label {
    display: flex;
  }

  input,
  p {
    margin: 6px;
  }
</style>
