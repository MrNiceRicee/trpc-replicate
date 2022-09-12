import express from "express";
import cors from "cors";
import server1Router from "./server1/router";
import server2Router from "./server2/router";

const main = async () => {
  const app = express();
  app.use(cors());

  app.get("/health", (_, res) => {
    res.send("ok");
  });

  app.use((req, _, next) => {
    // logger here
    console.log(req.method, req.url);
    next();
  });

  // mock middleware for attaching auth header
  app.use((req, _, next) => {
    if (req.headers.authorization !== "secret") {
      req.headers["x-user-name"] = "Guest";
    }
    req.headers["x-user-name"] = "SuperUser";
    next();
  });

  app.use("/api/server1", server1Router);
  app.use("/api/server2", server2Router);

  app.listen(8080, () => {
    console.log("Example app listening on port 8080!");
  });
};

main();
