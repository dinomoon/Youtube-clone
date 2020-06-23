import { videos } from "../db";

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
export const upload = (req, res) => {
  res.render("upload", { pageTitle: "upload" });
};

export const editVideo = (req, res) => {
  res.render("editVideo", { pageTitle: "edit-video" });
};
