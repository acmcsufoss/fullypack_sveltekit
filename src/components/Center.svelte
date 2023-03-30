<div class="text-center">
  <slot />
</div>

<style>
.text-center{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  padding:  10px;

@media (min-width: 768px) { 
  max-width: 65ch; 
 }
}
    
</style>


