<script lang="ts">
  import ArraysObjects from "$lib/components/Arrays&Objects.svelte";
    import AwaitBlocks from "$lib/components/AwaitBlocks.svelte";
    import CheckboxInputs from "$lib/components/bindings/CheckboxInputs.svelte";
    import GroupInputs from "$lib/components/bindings/GroupInputs.svelte";
    import MultipleSelectBindings from "$lib/components/bindings/MultipleSelectBindings.svelte";
    import NumericInputs from "$lib/components/bindings/NumericInputs.svelte";
    import SelectBindings from "$lib/components/bindings/SelectBindings.svelte";
    import TextareaInputs from "$lib/components/bindings/TextareaInputs.svelte";
    import TextInputs from "$lib/components/bindings/TextInputs.svelte";
    import ComponentEvents from "$lib/components/ComponentEvents.svelte";
    import DomEventForwarding from "$lib/components/DomEventForwarding.svelte";
    import DomEvents from "$lib/components/DomEvents.svelte";
    import EachBlocks from "$lib/components/Each-blocks.svelte";
  import ElseBlocks from "$lib/components/ElseBlocks.svelte";
  import ElseIfBlocks from "$lib/components/ElseIfBlocks.svelte";
    import EventForwarding from "$lib/components/EventForwarding.svelte";
    import EventModifiers from "$lib/components/EventModifiers.svelte";
    import KeyedEachBlocks from "$lib/components/keyed-each-blocks/KeyedEachBlocks.svelte";
  import Logic from "$lib/components/Logic.svelte";
  import Props from "$lib/components/Props.svelte";
  import Reactivity from "$lib/components/Reactivity.svelte";
  import SpreadProps from "$lib/components/SpreadProps.svelte";

  let string = `this string contains some <strong>HTML!!!</strong>`;

  const props = {
    test1: "ciao",
    test2: 42,
  };

  // let num = 0;
  
  // $: type = typeof num;

  // $: isValid = typeof num == `number`? true : false
  // let isValid = true;
  // function check() {
  //   return typeof num == `number`? true : false
  // }


  function handleMessage(event: any) {
    alert(event.detail.text)
  }
</script>

<!-- --- HTML ---  -->

<!-- <p>This is a paragraph</p>

<p>{@html string}</p> -->

<!-- <Reactivity /> -->

<!-- <ArraysObjects /> -->

<!-- <Props answer={42} />

<Props />

<SpreadProps {...props}  /> -->

<!-- <form>
  <input on:change={check} bind:value={num} type="text" required />
</form> -->

<!-- <Logic />

<ElseBlocks /> -->

<!-- <ElseIfBlocks x={num} /> -->

<!-- <EachBlocks /> -->

<!-- <KeyedEachBlocks /> -->

<!-- <AwaitBlocks /> -->

<!-- <DomEvents /> -->

<!-- <EventModifiers /> -->

<!-- <ComponentEvents on:message={handleMessage} /> -->

<!-- <EventForwarding on:message={handleMessage} /> -->

<!-- <DomEventForwarding on:click={(e) => alert(`clicked`)} /> -->

  <!-- <TextInputs /> -->
  <!-- <NumericInputs /> -->
  <!-- <CheckboxInputs /> -->
  <!-- <GroupInputs /> -->

  <!-- <TextareaInputs /> -->
  <!-- <SelectBindings /> -->
  <MultipleSelectBindings />

<!-- --- HTML ---  -->
<style>
  p {
    color: purple;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 2em;
  }
</style>
