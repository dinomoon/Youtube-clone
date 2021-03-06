import routes from "./routes";
import multer from "multer";

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "Mktube";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  next();
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

export const uploadVideo = multer({ dest: "videos/" }).single("file");
export const uploadAvatar = multer({ dest: "avatars/" }).single("avatar");
