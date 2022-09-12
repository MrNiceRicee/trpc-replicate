import { Router } from "express";
import proxy from "express-http-proxy";

const server2Router = Router();

server2Router.get(
  "/ping",
  proxy("http://localhost:8082", {
    proxyReqPathResolver: (req) => {
      console.log("proxying to server2", req.url);
      return `/api/status${req.url}`;
    },
  })
);

export default server2Router;
