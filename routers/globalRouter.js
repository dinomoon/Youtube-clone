import express from "express";
import { home, search } from "../controllers/videoController";
import {
  logout,
  getJoin,
  postJoin,
  getLogin,
  postLogin,
} from "../controllers/userController";
import { onlyPublic } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/search", search);

globalRouter.get("/join", onlyPublic, getJoin);
globalRouter.post("/join", onlyPublic, postJoin, postLogin);

globalRouter.get("/login", onlyPublic, getLogin);
globalRouter.post("/login", onlyPublic, postLogin);

globalRouter.get("/logout", logout);

export default globalRouter;
