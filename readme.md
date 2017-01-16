通过 babel 支持ES6语法

在加载中间件时，可通过config对babel进行配置，默认配置为

```javascript
{
    "sourceMaps": "both",
    "presets": ["es2015"]
}
```

**暂不支持 import 语法**