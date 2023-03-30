<script>
   
import NavBar from "../components/NavBar.svelte"; 
</script>
  
  <NavBar />
  <main class="nav">
    <slot />
  </main>

  <style>
    .nav
    {
      padding-top: 4rem;
    }
  </style>
  
