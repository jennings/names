<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  export let names;
  export let value;

  function setName(value: string) {
    dispatch("change", { value });
  }

  function addName(value: string) {
    if (value.length > 0) {
      dispatch("add-name", value);
    }
  }
</script>

<div>
  <select {value} on:input={(e) => setName(e.currentTarget.value)}>
    {#each names as name}
      <option value={name}>{name}</option>
    {/each}
  </select>
  <br />
  <input
    on:keydown={(e) => {
      if (e.key === "Enter") {
        const value = e.currentTarget.value;
        e.currentTarget.value = "";
        addName(value);
        setName(value);
      }
    }}
  />
</div>

<style>
</style>
