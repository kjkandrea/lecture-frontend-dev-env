## 과제

TODO: 웹팩으로 빌드한 자바스크립트를 여기(body 하위)에 로딩하세요

### `npm init` 으로 npm 개발환경을 구축하자.
### `webpack`, `webpack-cli`를 dev dependency 로 설치하자. 
```
npm install -D webpack webpack-cli
```
### webpack.config.js 를 생성하자. 

아이고 잘 기억이 안난다. 기본형을 한번 적어보자.
그리고 웹팩 옵션은 다음 커맨드를 입력하면 얼추 나온다. `webpack --help`

``` javascript
const path = require('path')

module.exports = {
    mode: '', // development, production, none 
    entry: {}, // 대상
    output: {} // 아웃풋
}
``` 
이거 토대로 컨닝하면서 타이밍함

``` javascript
const path = require('path')

module.exports = {
    mode: 'production',
    entry: {
        build: './src/app.js'
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js' // build.js
    }
}
``` 

### package.json 에 커맨드 만들어주자

```
"scripts": {
    "build": "webpack"
},
```

### 실행하자

```
npm run build
```

### 끝

아이고 이쁜 dist/build.js 가 나왔다. 
body 닫히기전에 스크립트 넣고

``` html
<script src="./dist/build.js"></script>
```

깔쌈하게 슛 `open index.html`

PROFIT 😎
