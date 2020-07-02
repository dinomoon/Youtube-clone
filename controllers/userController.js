import routes from "../routes";
import User from "../models/User";

export const getJoin = (req, res) => res.render("join", { pageTitle: "join" });
export const postJoin = async (req, res) => {
  const {
    body: { userName, email, password, password2 },
  } = req;
  if (password == password2) {
    console.log(userName);
    try {
      const user = await User({ userName, email });
      await User.register(user, password);
    } catch (error) {
      console.log(error);
    }
    res.redirect(routes.home);
  } else {
    res.status(400);
    res.render("join", { pageTitle: "join" });
  }
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "login" });
export const postLogin = (req, res) => res.redirect(routes.home);

export const logout = (req, res) => {
  res.redirect(routes.home);
};
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "editProfile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "change-password" });

export const userDetail = (req, res) => {
  res.render("userDetail", { pageTitle: "user-detail" });
};
