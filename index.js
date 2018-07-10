const { SyncWaterfallHook } = require('tapable');

module.exports = class WebpackDynamicSrc {
  /**
   * @param {Object} options 参数
   * @param {String} options.fn 动态设置 src 的方法名
   */
  constructor(options) {
    this.name = 'WebpackDynamicSrc';
    this.options = Object.assign({}, options);
  }

  apply(compiler) {
    compiler.hooks.compilation.tap(this.name, ({ mainTemplate }) => {
      if (!mainTemplate.hooks.jsonpScript) {
        mainTemplate.hooks.jsonpScript = new SyncWaterfallHook([
          "source",
          "chunk",
          "hash"
        ]);
      }

      mainTemplate.hooks.jsonpScript.tap(this.name, source => [
        source,
        `var newSrc;`,
        `try {`,
        ` if (typeof ${this.options.fn} !== "function") {`,
        `   throw new Error('${this.name}: fn is not a function.');`,
        ` }`,
        `  newSrc = ${this.options.fn}(script.src);`,
        ` if (!newSrc || typeof newSrc !== 'string') {`,
        `   throw new Error('${this.name}: fn does not return a string.');`,
        ` }`,
        `} catch (e) {`,
        ` console.error(e);`,
        ` newSrc = script.src;`,
        `}`,
        `script.src=newSrc`
      ].join('\n'));
    })
  }
}

