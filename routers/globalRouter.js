import express from "express";
import { home, search } from "../controllers/videoController";
import {
  logout,
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  getMe,
  userDetail,
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

// User Deatil
globalRouter.get(routes.me, getMe);

// Github
globalRouter.get(routes.github, passport.authenticate("github"));
globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: routes.login }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect(routes.home);
  }
);

// Facebook
globalRouter.get(routes.facebook, passport.authenticate("facebook"));
globalRouter.get(
  routes.facebookCallback,
  passport.authenticate("facebook", { failureRedirect: routes.login }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect(routes.home);
  }
);

// Kakao
globalRouter.get(routes.kakao, passport.authenticate("kakao"));
globalRouter.get(
  routes.kakaoCallback,
  passport.authenticate("kakao", { failureRedirect: routes.login }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect(routes.home);
  }
);

// Google
globalRouter.get("/auth/google", passport.authenticate("google"));
globalRouter.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

export default globalRouter;
