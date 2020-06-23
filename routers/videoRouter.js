import express from "express";
import routes from "../routes";
import { upload, editVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/");
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.editDetail, editVideo);

export default videoRouter;
