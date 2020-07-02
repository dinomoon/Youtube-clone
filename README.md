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

### multer와 express.static

- npm i multer
- multer? 파일을 서버로 보내고 URL을 알려주는 고마운 미들웨어~!
- enctype="multipart/form-data"
- app.use("/videos", express.static("videos"))

### videoDetail로 클릭한 video넘겨주기

- Video.findById(id);

### editVideo~~!

- getEditVideo controller 에서는 video의 기본정보를 채워준다.
- postEditVideo controller 에서는 바뀐 정보를 업데이트한다.

### deleteVideo~~!

### ESLint~!

- javascript 문법 에러와 코딩 스타일을 지적해준다.
- npm i eslint
- npm i eslint-plugin-prettier
- npm i eslint-config-prettier
- eslint --init

### Searching Videos~!

- regular expression
- Video.find({title: {$regex: searchingBy, $options: "i"}})

---

### What is Webpack?

- module bundler
- 많은 파일들을 가져와서 Webpack에게 주면 호환이 되는 static 파일들로 바꿔서 준다.
- npm i webpack webpack-cli -> cli? 터미널에서 webpack 사용할 수 있게 해줌
- npm run dev:server, npm run dev:assets

### Webpack 설정~~~

- dotenv를 아래처럼 직접 사용할 수도 있다고 한다.
- "dev:assets": "cross-env WEBPACK_ENV=development webpack"
- "build:assets": "cross-env WEBPACK_ENV=production webpack"
- webpack.config.js 파일에 코드 채우기~~~~

### 스타일링~~!

- li:not(:last-child) !!

---

### passport1

- passport? 깃헙 로그인이나 페이스북 로그인과 같은 것을 도와주는 녀석
- User 스키마 만들기
- npm i passport-local-mongoose
- npm i passport passport-local

### serializeUser, deserializeUser

- serialization? 어떤 정보(field)를 쿠키에게 줄 것인가
- 쿠키? 유저에 대한 정보
- 쿠키는 자동으로 백엔드로 전송 -> 백엔드에서 ID가 1인 사용자가 누구인지 알려줌
- 쿠키에는 누군가 접근할 수 있는 가능성이 있기 때문에 중요한 정보는 넣지 말 것
- desrialization? 쿠키에서 정보를 가져오는 것
- 회원가입!!

### authenticate

- 회원가입을 하면 postLogin으로 보내고 거기서 이메일과 비밀번호를 확인한 후 홈으로 보내주기
- app.use(passport.initialize());
- app.use(passport.session());
- 쿠키에서 사용자 정보 가져온다. 그리고 req.user로 만들어준다. -> 미들웨어에서 변수에 추가함으로써 template에서 user를 사용할 수 있다.
