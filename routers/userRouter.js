import express from "express";
import routes from "../routes";
import {
  changePassword,
  userDetail,
  getEditProfile,
  postEditProfile,
} from "../controllers/userController";
import { onlyPrivate, uploadAvatar } from "../middlewares";

const userRouter = express.Router();

// Edit Profile
userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);

// Change Password
userRouter.get(routes.changePassword, onlyPrivate, changePassword);

// User Deatil
userRouter.get(routes.userDetail(), userDetail);
export default userRouter;
