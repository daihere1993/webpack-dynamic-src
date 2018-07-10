window.dynamicSrc = function (src) {
  console.log(`Original src: ${src}`);
  let chunkName = src.slice(src.lastIndexOf('/') + 1);
  return `https://www.baidu.com/test/${chunkName}`;
}

require(['./a.js'], () => {
  // console.log('a');
});