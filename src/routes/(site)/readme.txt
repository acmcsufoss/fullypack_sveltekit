this folder demonstrates how routing works in sveltekit if you want to add more pages 

The folder named (site) is treated as reserverd folder route to add more pages, so after you name it (site), you add another folder with the name of your page,
in this example it's named "content". Inside the "content" folder you add "+page.svelte" for the routing system to read that /content route.

Now when we go to ourwebsite.com/content whatever is inside +page.svelte under this folder will show up. 


For more information on routing visit https://learn.svelte.dev/tutorial/layouts and https://kit.svelte.dev/docs/routing