import { Router } from "express";
import server1Router from "./server1";

const server1 = Router();

server1.use('/user', server1Router);


export default server1;