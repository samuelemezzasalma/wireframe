<script lang="ts">
  async function getRandomNumber() {
		const res = await fetch(
			`https://svelte.dev/tutorial/random-number`
		);
		const text = await res.text();

		if (res.ok) {
			return text;
		} else {
			throw new Error(text);
		}
	}

	let promise = getRandomNumber();

	function handleClick() {
		promise = getRandomNumber();
	}
</script>

<!-- --- HTML ---  -->

<button on:click={handleClick}> generate random number </button>

<!-- replace this element -->
{#await promise}
  <!-- promise is pending -->
  <p>...waiting</p>
{:then number}
  <!-- promise was fulfilled -->
<p>The number is {number}</p>
{:catch error}
  <!-- promise was rejected -->
  <p style="color: red;">{error.message}</p>
{/await}

<!-- --- HTML ---  -->

<style>
</style>
