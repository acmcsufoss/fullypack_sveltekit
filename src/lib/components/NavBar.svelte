<script>
  import Icon from "$lib/components/Icon.svelte";
  import { page } from "$app/stores";

  // List of navigation items, add more here if you make more pages :D
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Content", href: "/content" },
  ];
</script>

<nav>
  <ul class="left">
    <li>
      <a href="/" class:active={$page.url.pathname == "/"}>
        <Icon icon="home" />
      </a>
    </li>
  </ul>

  <ul class="right">
    {#each navItems.filter((item) => item.href != "/") as item}
      <li>
        <a href={item.href} class:active={$page.url.pathname == item.href}>
          {item.label}
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  a[href] {
    color: var(--pico-secondary);
  }

  a[href].active {
    color: var(--pico-primary);
    font-weight: bold;
  }
</style>
