import express from "express";
import { home, search } from "../controllers/videoController";
import {
  login,
  logout,
  getJoin,
  postJoin,
} from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/search", search);

globalRouter.get("/join", getJoin);
globalRouter.post("/join", postJoin);

globalRouter.get("/login", login);
globalRouter.get("/logout", logout);

export default globalRouter;
