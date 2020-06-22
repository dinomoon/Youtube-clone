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
