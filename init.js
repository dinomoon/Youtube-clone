import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import passport from "passport";
import "./passport";

const app = express();

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
app.use("/static", express.static("static"));

// passport
app.use(passport.initialize());
app.use(passport.session());

export default app;
