## 미션
1. TODO: CSS 파일을 엔트리포인트(app.js)에서 로딩하세요. 웹팩에서 로딩할수 있도록 로더를 설정해야 합니다
2. TODO: 파일을 로딩할수 있도록 웹팩 로더 설정을 추가하세요 (file-loader나 image-loader) 

## 풀이

### 1번을 위해 css-loader, style-loader 인스톨
```
npm i -D style-loader css-loader 
```

### 2번을 위해 file-loader 인스톨
```
npm i -D file-loader
```

### css-loader style-loader 옵션 설정

``` javascript
module: {
    rules: [
      {
        test: '/\.css$/',
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
}
```

### file-loader 옵션 설정

``` javascript
{
    test: /\.(jpg|png)$/,
    loader: 'file-loader',
    options: {
      publicPath: './dist/',
      name: '[name].[ext]?[hash]'
    }
}
```

### app.js 에서 css 로드

``` javascript
import './main.css'
```

### 😎 PROFIT 😎
