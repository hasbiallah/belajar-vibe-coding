import { Elysia } from "elysia";
import { usersRoute } from "./routes/users-route";

const app = new Elysia()
  .use(usersRoute)
  .get("/", () => ({
    status: "ok",
    message: "Welcome to Elysia with Bun and Drizzle!",
    timestamp: new Date().toISOString()
  }))
  .listen(3000);


console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
