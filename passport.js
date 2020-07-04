import passport from "passport";
import User from "./models/User";
import GithubStrategy from "passport-github";
import FacebookStrategy from "passport-facebook";
import KakaoStrategy from "passport-kakao";
var GoogleStrategy = require("passport-google-oauth").OAuthStrategy;
import dotenv from "dotenv";
import {
  githubLoginCallback,
  facebookLoginCallback,
  kakaoLoginCallback,
} from "./controllers/userController";
import routes from "./routes";
dotenv.config();

passport.use(User.createStrategy());

// Google
// passport.use(
//   new GoogleStrategy(
//     {
//       consumerKey: GOOGLE_CONSUMER_KEY,
//       consumerSecret: GOOGLE_CONSUMER_SECRET,
//       callbackURL: "http://www.example.com/auth/google/callback",
//     },
//     function (token, tokenSecret, profile, done) {
//       User.findOrCreate({ googleId: profile.id }, function (err, user) {
//         return done(err, user);
//       });
//     }
//   )
// );

// Github
passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: `http://localhost:5000${routes.githubCallback}`,
    },
    githubLoginCallback
  )
);

// Facebook
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: `https://nervous-fish-19.serverless.social${routes.facebookCallback}`,
      profileFields: ["id", "displayName", "photos", "email"],
      scope: ["public_profile", "email"],
    },
    facebookLoginCallback
  )
);

// Kakao
passport.use(
  new KakaoStrategy(
    {
      clientID: process.env.KAKAO_CLIENT_ID,
      clientSecret: "", // clientSecret을 사용하지 않는다면 넘기지 말거나 빈 스트링을 넘길 것
      callbackURL: "http://localhost:500/oauth",
    },
    kakaoLoginCallback
  )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
