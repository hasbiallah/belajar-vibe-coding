import { Elysia, t } from "elysia";
import { registerUser } from "../services/users-service";

export const usersRoute = new Elysia({ prefix: "/api" })
  .post("/users", async ({ body, set }) => {
    try {
      const data = await registerUser(body);
      
      return {
        success: true,
        message: "User berhasil di registrasi",
        data,
        timestamp: new Date().toISOString()
      };
    } catch (error: any) {
      set.status = 400;
      
      if (error.message === "Email sudah terdaftar") {
        return {
          success: false,
          message: error.message,
          data: {
            name: body.name,
            email: body.email
          },
          timestamp: new Date().toISOString()
        };
      }

      return {
        success: false,
        message: error.message || "Terjadi kesalahan pada server",
        timestamp: new Date().toISOString()
      };
    }
  }, {
    body: t.Object({
      name: t.String(),
      email: t.String({ format: 'email' }),
      password: t.String()
    })
  });
