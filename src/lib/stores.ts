import { writable } from "svelte/store";

// candies stores the number of candies the user has.
export const candies = writable<number>(0);
