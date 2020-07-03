import express from "express";
import { home, search } from "../controllers/videoController";
import {
  logout,
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  getMe,
} from "../controllers/userController";
import { onlyPublic, onlyPrivate } from "../middlewares";
import routes from "../routes";
import passport from "passport";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

// join
globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

// login
globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

// logout
globalRouter.get(routes.logout, onlyPrivate, logout);

// github
globalRouter.get(routes.github, passport.authenticate("github"));
globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: routes.login }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect(routes.home);
  }
);

globalRouter.get(routes.me, getMe);

export default globalRouter;
