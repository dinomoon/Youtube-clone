import express from "express";

const globalRouter = express.Router();

globalRouter.get("/", (req, res) => res.send("Hello from home"));

export default globalRouter;
