export const prerender = false;

import type { APIContext, APIRoute } from "astro";

export const GET: APIRoute = (context: APIContext) => {
    return new Response("Hello World! " + context.params.id);
}