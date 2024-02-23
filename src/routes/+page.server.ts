// SvelteKit allows us to define a separate file for the server-side logic of
// a page. This file is executed on the server and is used to fetch data that
// will be passed to the page for rendering.
//
// Using this file lets us skip implementing an endpoint in the API, and
// instead fetch the data directly from the database.
// Such feature is the "full-stack" part of SvelteKit.
//
// IMPORTANT: your editor will likely mark this file as having errors even though
// you've not made any changes. To fix this, run `npm run dev`.

import type { PageServerLoad } from "./$types";
import db from "$lib/db";

export const load: PageServerLoad = async () => {
  const candies = db.data.candies;
  return { candies };
};
