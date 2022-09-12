import { Router } from "express";
import server2Router from "./server2";

const server2 = Router();

server2.use((req, _, next) => {
  console.log("server2", req.url);
  next();
});

server2.use("/status", server2Router);

export default server2;
