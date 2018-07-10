# webpack-dynamic-src

Webpack plugin that allows to configure dynamic chunk's src.

## Useage

```javascript
// webpack.config.js
const WebpackDynamicSrc = require('webpack-dynamic-src');

module.exports = {
  plugins: [
    new WebpackDynamicSrc({ fn: 'dynamicSrcFn' })
  ]
}

// main.js
window.dynamicSrcFn = function (oldSrc) {
  // do something by oldSrc;
  console.log(`Original src: ${src}`);
  let chunkName = src.slice(src.lastIndexOf('/') + 1);
  return `https://www.google.com/test/${chunkName}`;
}
```