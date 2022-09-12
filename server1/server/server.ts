import { z } from "zod";
import { createRouter } from "./context";
// import message from "./user/router";

export const appRouter = createRouter()
  .query("hello", {
    input: z.object({
      name: z.string().optional(),
    }),
    resolve({ input, ctx }) {
      return `Hello ${input.name ?? ctx.user?.name ?? "world"}`;
    },
  })
  // .merge("user", message); // <-- uncommenting this line breaks the client pathAndInput type
export type AppRouter = typeof appRouter;
