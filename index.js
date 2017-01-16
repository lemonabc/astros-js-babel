'use strict';
var babel = require("babel-core")

module.exports = new astro.Middleware({
    fileType: 'js',
    modType:'page'
}, function(asset, next) {
    let cfg = Object.assign({
        "sourceMaps": 'both',
        "presets": ["es2015"]
    }, this.config);
    // console.trace();
    let ger = babel.transform(asset.data, cfg);

    asset.data = ger.code;
    next(asset);
});