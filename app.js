import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import passport from "passport";
import session from "express-session";
import mongoStore from "connect-mongo";
import mongoose from "mongoose";
import "./passport";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import { localMiddleware } from "./middlewares";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const cookieStore = mongoStore(session);

app.set("view engine", "pug");
app.use(helmet());
app.use(morgan("dev"));

// bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// cookieParser
app.use(cookieParser());

// static
app.use("/videos", express.static("videos"));
app.use("/avatars", express.static("avatars"));
app.use("/static", express.static("static"));

// session
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    store: new cookieStore({ mongooseConnection: mongoose.connection }),
  })
);

// passport
app.use(passport.initialize());
app.use(passport.session());

app.use(localMiddleware);
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
