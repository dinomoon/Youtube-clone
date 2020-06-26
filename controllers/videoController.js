import routes from "../routes";

export const home = (req, res) => {
  res.render("home", { pageTitle: "home", videos });
};
export const search = (req, res) => {
  //const searchingBy = req.query.term;
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { pageTitle: "search", searchingBy });
};
export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "upload" });
};

export const postUpload = (req, res) => {
  const {
    body: { file, title, description },
  } = req;
  res.redirect(routes.videoDetail(1234));
};

export const videoDetail = (req, res) => {
  res.render("videoDetail", { pageTitle: "videoDetail" });
};

export const editVideo = (req, res) => {
  res.render("editVideo", { pageTitle: "edit-video" });
};
