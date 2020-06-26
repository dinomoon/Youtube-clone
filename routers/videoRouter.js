import express from "express";
import routes from "../routes";
import {
  getUpload,
  postUpload,
  editVideo,
  videoDetail,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/");
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editDetail, editVideo);

export default videoRouter;
