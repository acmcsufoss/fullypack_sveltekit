<script>
  import NavBar from "$lib/components/NavBar.svelte";
</script>

<NavBar />

<main class="nav">
  <slot />
</main>

<style>
  .nav {
    padding-top: 4rem;
  }
</style>
