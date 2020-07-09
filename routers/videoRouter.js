import express from "express";
import routes from "../routes";
import {
  getUpload,
  postUpload,
  videoDetail,
  getEditVideo,
  postEditVideo,
  deleteVideo,
  registerView,
  AddComment,
} from "../controllers/videoController";
import { uploadVideo, onlyPrivate } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get("/");

// Upload
videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

// Detail
videoRouter.get(routes.videoDetail(), registerView, videoDetail);

// Edit
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

// Delete
videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

// Comments
videoRouter.post(routes.addComment, AddComment);

export default videoRouter;
