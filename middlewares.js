import routes from "./routes";
import multer from "multer";

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "Mktube";
  res.locals.routes = routes;
  res.locals.user = req.user || {};
  console.log(req.user);
  next();
};

export const uploadVideo = multer({ dest: "videos/" }).single("file");
