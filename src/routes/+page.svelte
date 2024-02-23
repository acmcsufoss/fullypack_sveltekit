<script>
  import { candies } from "$lib/stores";
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<h1>Hello!</h1>
<h3>Welcome to FullyHacks 2024</h3>

<article class="candies">
  <header>
    <h4>🍭 Candy Shop</h4>
  </header>

  <main>
    <button class:odd={$candies % 2} on:click={() => ($candies += 1)}> Click me </button>
    <p>🍬 Candies: {$candies}</p>
  </main>
</article>

<hr />

<footer class="centered">
  <p>🔹 California State University, Fullerton 🔸</p>
</footer>

<style lang="scss">
  .candies main {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--pico-spacing);

    p {
      margin: 0;
    }

    button.odd {
      background-color: var(--pico-secondary);
      border-color: var(--pico-secondary);
    }
  }
</style>
