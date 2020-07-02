import express from "express";
import routes from "../routes";
import {
  editProfile,
  changePassword,
  userDetail,
} from "../controllers/userController";
import { onlyPrivate } from "../middlewares";

const userRouter = express.Router();

userRouter.get("/");
userRouter.get(routes.userDetail(), userDetail);
userRouter.get(routes.editProfile, onlyPrivate, editProfile);
userRouter.get(routes.changePassword, onlyPrivate, changePassword);

export default userRouter;
