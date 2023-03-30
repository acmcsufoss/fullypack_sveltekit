<script>
        import Center from "./Center.svelte";
    /*
    -inside this page I have some text and a component called Text
    -this component tries to center anything found inside it's tags
    -components like this can be reused across your site
    -feel free to edit this component to make it better fit your needs
    */
  </script>
  
<Center>
   
        <section class="welcome-container">
               <div class="text-1">Hello! </div> <br>
               <div class="text-2"> Welcome to FullyHacks 2023</div> <br>
               <div class="subtitle">   🔹 California State University, Fullerton 🔸  </div>
             </section>     
</Center>


<style>


    .welcome-container {
      position: relative;
      max-width: fit-content;
      line-height: 4rem;
      margin: 0;
      top: 10rem;
      padding:0;
      
  }
  .text-1 {
      font-size: 4rem;
      font-weight: 200;
      color:rgb(191, 229, 252);
  }
 
   
 .text-2{
  font-size: 2.7rem;  
  font-weight: 200;
  line-height: 3rem;
  color:rgb(191, 229, 252);
 }    
 
  .subtitle {
     font-size: 1.8rem;
    font-weight: 200;
    color:rgb(191, 229, 252);
    
  }
</style>