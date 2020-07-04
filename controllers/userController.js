import routes from "../routes";
import User from "../models/User";
import passport from "passport";

// Join
export const getJoin = (req, res) => res.render("join", { pageTitle: "join" });

export const postJoin = async (req, res, next) => {
  const {
    body: { userName, email, password, password2 },
  } = req;
  if (password == password2) {
    try {
      const user = await User({ name: userName, email });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  } else {
    res.status(400);
    res.render("join", { pageTitle: "join" });
  }
};

// Log in
export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "login" });

export const postLogin = passport.authenticate("local", {
  successRedirect: routes.home,
  failureRedirect: routes.login,
});

// Log out
export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

// Edit Profile
export const editProfile = async (req, res) => {
  const {
    params: { id },
  } = req;
  console.log(id);
  try {
    const user = await User.findById(id);
    res.render("editProfile", { pageTitle: "editProfile", user });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

// Chagne Password
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "change-password" });

// User Deatil
export const userDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const user = await User.findById(id);
    res.render("userDetail", { pageTitle: "user-detail", user });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const getMe = (req, res) => {
  res.render("userDetail", { pageTitle: "userDeatil", user: req.user });
};

// Github
export const githubLoginCallback = async (_, __, profile, cb) => {
  const {
    _json: { id: githubId, avatar_url: avatarUrl, name, email },
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.githubId = githubId;
      user.avtarUrl = avatarUrl;
      user.save();
      return cb(null, user);
    }
    const newUser = await User.create({
      githubId,
      name,
      email,
      avatarUrl,
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};

// Facebook
export const facebookLoginCallback = (
  accessToken,
  refreshToken,
  profile,
  cb
) => {
  console.log(accessToken, refreshToken, profile, cb);
};

// Kakao
export const kakaoLoginCallback = (_, __, profile, cb) => {
  async (_, __, profile, cb) => {
    const {
      id,
      username: name,
      _json: {
        properties: { profile_image },
        kakao_account: { email },
      },
    } = profile;
    try {
      const user = await User.findOne({ email });
      if (user) {
        user.kakaoId = id;
        user.save();
        return cb(null, user);
      } else {
        const newUser = await User.create({
          email,
          name,
          kakaoId: id,
          avartarUrl: profile_image,
        });
        return cb(null, newUser);
      }
    } catch (error) {
      return cb(error);
    }
  };
};
