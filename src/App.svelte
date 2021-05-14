<script lang="ts">
  import { auth, authenticatedUser, authUI, authUIConfig } from "./firebase";
  import NameRandomizer from "./NameRandomizer.svelte";

  authUI.start("#firebaseui-auth-container", {
    ...authUIConfig,
    callbacks: {
      signInSuccessWithAuthResult(result, redirectUrl) {
        return false;
      },
    },
  });

  function signOut() {
    auth.signOut();
  }
</script>

<main>
  {#if $authenticatedUser}
    <NameRandomizer />
    <div>
      Signed in as: {$authenticatedUser.displayName}<br />
      <button on:click={signOut}>Sign out</button>
    </div>
  {:else}
    <div id="firebaseui-auth-container" />
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
