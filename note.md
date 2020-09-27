## 미션

TODO: 아래 플러그인을 추가해서 번들 결과를 만들어 보세요.
* [x] 1. BannerPlugin: 결과물에 빌드 시간을 출력하세요.
* [x] 2. HtmlWebpackPlugin: 동적으로 html 파일을 생성하세요.
* [x] 3. CleanWebpackPlugin: 빌드 전에 아웃풋 폴더를 깨끗히 정리하세요.
* [x] 4. MiniCssExtractPlugin: 모듈에서 css 파일을 분리하세요.

* [x] TODO: HtmlWebpackPlugin에서 빌드 환경을 주입하도록 웹팩을 구성하세요
* [x] TODO: HtmlWebpackPlugin에서 엔트리 포인트(main.css)를 로딩하도록 웹팩을 구성하세요
* [x] TODO: HtmlWebpackPlugin에서 엔트리 포인트(main.js)를 로딩하도록 웹팩을 구성하세요

## 풀이

### 패키지 인스톨

banner plugin 빼면 다 서드파트여서 설치해줘야 한다.

```
npm install -D html-webpack-plugin clean-webpack-plugin mini-css-extract-plugin
```

### BannerPlugin 요구사항 구현

*1. BannerPlugin: 결과물에 빌드 시간을 출력하세요.*

배너플러그인은 webpack 기본적으로 내장되어있다. 세팅만 하면됨

``` javascript
plugins: [
    new webpack.BannerPlugin({
        banner: `
            Build Time: ${new Date().toTimeString().toLocaleString()}
        `
    })
]
```

### HtmlWebpackPlugin 요구사항 구현

dist에 html 빌드되게 하자

``` javascript
const HtmlWebpackPlugin = require("html-webpack-plugin")

new HtmlWebpackPlugin({
    template: './src/index.html'
})
```

환경변수 만들어 EJS로 출력하자.

``` javascript
new HtmlWebpackPlugin({
    template: './src/index.html',
    templateParameters: {
        env: process.env.NODE_ENV === 'production' ? ' - 개발환경' : ' - 프로덕션'
    }
})
```

``` html
<title>검색<%=env %></title>
```

### CleanWebpackPlugin 요구사항 구현

그냥 설치된거 정의만 하면됨

### MiniCssExtractPlugin 요구사항 구현

### 💵 PROFIT 💵
