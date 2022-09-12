import { Router } from "express";
import proxy from "express-http-proxy";

const server1Router = Router();

server1Router.get(
  "/hello",
  proxy("http://localhost:8081", {
    proxyReqPathResolver: (req) => {
      return `/api/user${req.url}`;
    },
  })
);

server1Router.get(
  '/sayHi',
  proxy('http://localhost:8081', {
    proxyReqPathResolver: (req) => {
      return `/api/user${req.url}`;
    },
  })
)

export default server1Router;
