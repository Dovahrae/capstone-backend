import express from "express";
import cors from "cors";
import { db } from "./db/db.js";

const server = express();
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
    res.send({ api: "online" });
});

server.listen(3001, () => {
    console.log("api server online");
});
