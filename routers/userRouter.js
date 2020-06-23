import express from "express";
import routes from "../routes";
import {
  editProfile,
  changePassword,
  userDetail,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/");
userRouter.get(routes.userDetail(), userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
