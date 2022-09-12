import { z } from "zod";
import { createRouter } from "./context";
// import message from "./user/router";

export const appRouter = createRouter()
  .query("user/hello", {
    input: z.object({
      name: z.string().optional(),
    }),
    resolve({ input, ctx }) {
      return `Hello ${input.name ?? ctx.user?.name ?? "world"}`;
    },
  })
  // .merge("user", message); // <-- uncommenting this line breaks the client pathAndInput type
  .query("user/sayHi", { // <-- this is the same as the above line, but it works fine
    meta: {
      hasUser: true,
    },
    input: z.object({
      name: z.string().optional(),
      message: z.string().optional(),
    }),
    resolve({ input, ctx }) {
      return `${input.name ?? 'someone'} said ${input.message ?? "hi"} to ${ctx.user.name}`;
    },
  });
export type AppRouter = typeof appRouter;
