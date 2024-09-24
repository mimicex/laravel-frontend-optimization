## laravel 10 web 前端網頁優化

### load Google Fonts
#### 如果有載入 google fonts ，可在meta載入 preconnect 與 dns-prefetch 預先處理

```
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="dns-prefetch" href="https://fonts.googleapis.com" />
<link rel="dns-prefetch" href="https://fonts.gstatic.com/">
```
#### google Fonts 透過 Web Worker 去背景下載fonts
<https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Noto+Sans+TC:wght@200;300;400;500;600;700&family=Noto+Serif+TC:wght@200;300;400;500;600;700&display=swap>
#### post message to Web Worker ，背景透過 fetch 下載該字體
#### 記得連結要加入 &display=swap

### 圖檔預先填入 width 與 height，並使用 lazyload方式載入圖片，可加快你 chrome 運算過程
```
<img src="" id="lazy" data-src="./test.png alt="" width="60" height="30"">
```
#### 可參考 app/resources/js/lazyLoad.js

### vite minify
```
npm i vite-plugin-minify
```
#### vite minify 設定 vite.config.js
```
import { ViteMinifyPlugin } from 'vite-plugin-minify'

plugins: [
    省略...
    ViteMinifyPlugin(),
    省略...
」
```

### lightningcss
```
npm i vite-plugin-lightningcss
```
#### lightningcss 設定 vite.config.js
```
import lightningcss from 'vite-plugin-lightningcss'

plugins: [
    省略...
    lightningcss({
        browserslist: '>= 0.25%'
    }),
    省略...
」
```

