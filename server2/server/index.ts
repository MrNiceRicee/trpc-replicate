import express from "express";
import cors from "cors";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./server";
import { createContext } from "./context";

const main = async () => {
  const app = express();
  app.use(cors());

  app.get("/health", (_, res) => {
    res.send("ok");
  });

  app.use((req, _res, next) => {
    // request logger
    console.log("⬅️ server2", req.method, req.path, req.body ?? req.query);
    next();
  });

  app.use(
    "/api/",
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );

  app.listen(8082, () => {
    console.log("Example app listening on port 8082!");
  });
};

main();
