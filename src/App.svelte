<script lang="ts">
  import NamePicker from "./NamePicker.svelte";
  import { firstNames, middleNames, lastNames } from "./store";

  let firstName = "Carol";
  let middleName = "";
  let lastName = "Jennings";
</script>

<main>
  {firstName}
  {middleName}
  {lastName}.
  <br />

  <div class="pickers">
    <NamePicker
      names={$firstNames}
      value={firstName}
      on:change={(e) => (firstName = e.detail.value)}
      on:add-name={(e) => firstNames.update((n) => [...n, e.detail])}
    />

    <NamePicker
      names={$middleNames}
      value={middleName}
      on:change={(e) => (middleName = e.detail.value)}
      on:add-name={(e) => middleNames.update((n) => [...n, e.detail])}
    />
    <NamePicker
      names={$lastNames}
      value={lastName}
      on:change={(e) => (lastName = e.detail.value)}
      on:add-name={(e) => lastNames.update((n) => [...n, e.detail])}
    />
  </div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  .pickers {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
</style>
