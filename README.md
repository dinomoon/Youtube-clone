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

### router 추가, controller 만들기

### pug - layouts, components

### pug - local variables

### pug - template variables

### Search controller

1. get방식으로 form을 보내면 req.qeury에 들어있다.
2. const {query: {term: searchingBy}} = req; 와 const searchingBy = req.query.term 는 같다.
3. template variable로 searchingBy를 보낼 때, searchingBy: searchingBy와 searchingBy는 같다.

### pug - log in, join

### pug - editProfile

### pug - upload, editVideo, changePassword

### Home controller - make fake database and use it

### pug - mixins

### Join controller

### Login controller, user.authenticated, profile클릭 시 해당 유저의 profile로 갈 수 있도록 하기

### More controllers(videoDetail, logout, upload)

---

### MongoDB and Mongoose

- Mongoose: elegant mongodb object modeling for node.js

### Connecting to MongoDB

### Configuring Dot Env

- dotenv? 숨기고 싶은 정보를 숨길 수 있게 해준다.

### Make Video Model

### Make Comment Model

### 데이터베이스에서 video 가져와서 home에 뿌리기

- async await 사용하기
