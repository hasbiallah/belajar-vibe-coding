import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => ({
    status: "ok",
    message: "Welcome to Elysia with Bun and Drizzle!",
    timestamp: new Date().toISOString()
  }))
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
