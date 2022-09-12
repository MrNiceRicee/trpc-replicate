import * as trpc from "@trpc/server";
import "@trpc/server/adapters/express";
import * as server1 from "../../server1/server/server";
import * as server2 from "../../server2/server/server";

const appRouter = trpc
  .router<any>()
  .merge("server1/", server1.appRouter)
  .merge("server2/", server2.appRouter);

export type AppRouter = typeof appRouter;
