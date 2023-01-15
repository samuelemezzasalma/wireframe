<script lang="ts">

  let numbers: number[] = []

function addNumber() {
  // numbers = [...numbers, numbers.length +1]
  numbers[numbers.length] = numbers.length + 1
}

let obj = {
  foo: {
     bar: 'baz'
  }
};

let foo = obj.foo;

foo.bar = "ted";

// obj.foo.bar = "ted"

// obj = {...obj, foo: { ...foo, bar: 'ted'}}



</script>

<!-- --- HTML ---  -->

<button on:click={addNumber}>Add a number</button>

<p>{numbers}</p>

<p>{obj.foo.bar}</p>

<!-- --- HTML ---  -->

<style>


</style>