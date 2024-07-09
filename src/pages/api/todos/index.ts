import type { APIRoute, APIContext } from "astro";
import { db, Todos } from "astro:db";

export const POST: APIRoute = async (context: APIContext) => {

    const todo = await context.request.json()
    await db.insert(Todos).values({
        title: todo.title,
        description: todo.description,
        status: todo.status
    })

    return context.redirect("/todos", 303)
}