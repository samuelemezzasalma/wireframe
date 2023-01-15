<script lang="ts">

let m = { x: 0, y: 0 };

	function handleMousemove(event: MouseEvent) {
		m.x = event.clientX;
		m.y = event.clientY;
	}

</script>

<!-- --- HTML ---  -->

<!-- <div on:mousemove={handleMousemove}>
	The mouse position is {m.x} x {m.y}
</div> -->

<div on:mousemove="{(e) => m = {x: e.clientX, y: e.clientY}}">
  The mouse position is {m.x} x {m.y}
</div>

<!-- --- HTML ---  -->


<style>
  div {
    background-color: aqua;
		width: 100%;
		height: 100vh;
	}
</style>
