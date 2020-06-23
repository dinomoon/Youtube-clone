import express from "express";
import { home, search } from "../controllers/videoController";
import {
  logout,
  getJoin,
  postJoin,
  getLogin,
  postLogin,
} from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/search", search);

globalRouter.get("/join", getJoin);
globalRouter.post("/join", postJoin);

globalRouter.get("/login", getLogin);
globalRouter.post("/login", postLogin);

globalRouter.get("/logout", logout);

export default globalRouter;
