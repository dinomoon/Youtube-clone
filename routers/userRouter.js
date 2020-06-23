import express from "express";
import { editProfile } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/");
userRouter.get("/edit-profile", editProfile);

export default userRouter;
