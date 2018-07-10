# webpack-dynamic-src

Webpack plugin that allows to configure dynamic chunk's src.

## Install

```bash
npm install webpack-dynamic-src
```

## Usage

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
  console.log(`Original src: ${oldSrc}`);
  let chunkName = oldSrc.slice(oldSrc.lastIndexOf('/') + 1);
  return `https://www.google.com/test/${chunkName}`;
}
```
