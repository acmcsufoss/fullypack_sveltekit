<script>
  // We use pico.css here to style the layout. pico.css is a drop-in CSS library
  // that provides minimal styles for a fast and clean starting point without
  // needing any class names.
  //
  // They have more colors available at https://picocss.com/docs/version-picker.

  import NavBar from "$lib/components/NavBar.svelte";
  import "$lib/styles.scss";
</script>

<header class="container">
  <NavBar />
</header>

<main class="container">
  <slot />
</main>
