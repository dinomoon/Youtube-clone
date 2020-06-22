# Youtube clone

### 기본 설정

1. express 설치
2. babel 설치

- @babel/node
- @babel/core
- @babel/preset-env

3. nodemon 설치

- npm i nodemon -D

```js
// package.json
{
  "scripts": {
    "start": "nodemon --exec babel-node init.js"
  },
}

// .babelrc
{
  "presets": ["@babel/preset-env"]
}
```

### 기본 설정2

1. morgan 설치
2. helmet 설치
3. body-parser 설치
4. cookie-parser 설치

```js
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.listen("5000", console.log("Listening"));
```

### router 만들기

```js
// app.js
import app from "./init";
import globalRouter from "./routers/globalRouter";

const PORT = "5000";

app.use("/", globalRouter);

app.listen(PORT, console.log(`Listening on http://localhost:${PORT}`));

// globalRouter.js
import express from "express";

const globalRouter = express.Router();

globalRouter.get("/", (req, res) => res.send("Hello from home"));

export default globalRouter;
```
