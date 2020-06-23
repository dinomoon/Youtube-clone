import routes from "../routes";

export const getJoin = (req, res) => res.render("join", { pageTitle: "join" });
export const postJoin = (req, res) => {
  const {
    body: { email, password, password2 },
  } = req;
  if (password == password2) {
    res.redirect(routes.home);
  } else {
    res.status(400);
    res.render("join", { pageTitle: "join" });
  }
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "login" });
export const postLogin = (req, res) => res.redirect(routes.home);

export const logout = (req, res) => res.render("logout");
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "editProfile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "change-password" });

export const userDetail = (req, res) => {
  res.render("userDetail", { pageTitle: "user-detail" });
};
