import { z } from "zod";
import { createRouter } from "~/context";

const message = createRouter().query("sayHi", {
  meta: {
    hasUser: true,
  },
  input: z.object({
    name: z.string(),
    message: z.string().optional(),
  }),
  resolve({ input, ctx }) {
    return `${input.name} said ${input.message ?? "hi"} to ${ctx.user.name}`;
  },
});

export default message;
