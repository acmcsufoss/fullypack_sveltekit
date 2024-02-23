// SvelteKit also allows us to implement a full REST API server if we wish to. Here,
// we implement a simple GET/POST API for the candies resource.
//
// IMPORTANT: your editor will likely mark this file as having errors even though
// you've not made any changes. To fix this, run `npm run dev`.

import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import db from "$lib/db";

export const GET: RequestHandler = async () => {
  return json({
    candies: db.data.candies,
  });
};

export type AddCookiesRequest = {
  candies: number;
};

export const POST: RequestHandler = async ({ request }) => {
  const data = (await request.json()) as AddCookiesRequest;

  db.data.candies += data.candies;
  await db.write();

  return json({
    candies: db.data.candies,
  });
};
