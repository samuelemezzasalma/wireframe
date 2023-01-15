<script lang="ts">
  let cats = [
    { id: "J---aiyznGQ", name: `Keyboard Cat` },
    { id: `z_AbfPXTKms`, name: `Maru` },
    { id: `OUtn3pvWmp`, name: `Henri The Existential Cat` },
  ];
</script>

<!-- --- HTML ---  -->

<h1>The Famous Cats of Youtube</h1>

<ul>
  {#each cats as { id, name }, i}
    <li>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.youtube.com/watch?v={id}">{i + 1}: {name}</a
      >
    </li>
  {/each}
</ul>

<!-- --- HTML ---  -->
<style>
</style>
