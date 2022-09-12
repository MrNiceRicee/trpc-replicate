import { z } from "zod";
import * as trpcExpress from "@trpc/server/adapters/express";
import * as trpc from "@trpc/server";
// import { TRPCError } from '@trpc/server';

export interface Meta {
  hasUser?: boolean;
}

const userSchema = z.object({
  name: z.string(),
});

export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => {
  const getUser = () => {
    if (req.headers.authorization !== "secret") {
      return {
        name: "guest",
      };
    }
    const name = req.headers["x-user-name"] as string;
    return {
      name,
    };
  };

  return {
    req,
    res,
    user: getUser(),
  };
};
type Context = trpc.inferAsyncReturnType<typeof createContext>;

export const createRouter = () => {
  return trpc
    .router<Context, Meta>()
    .formatError(({ shape }) => {
      return {
        ...shape,
        data: {
          ...shape.data,
          stack: null,
        },
      };
    })
    .middleware(async ({ next, ctx, meta }) => {
      if (meta?.hasUser) {
        const parseUser = userSchema.safeParse(ctx.user);
        if (!parseUser.success) {
          throw new trpc.TRPCError({
            code: "UNAUTHORIZED",
            message: "Unauthorized",
          });
        }
      }
      return next();
    });
};
