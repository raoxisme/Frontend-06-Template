## 单元测试
### Unit Test [Mocha](https://mochajs.org/)
- `describe` 分组机制
- `it` 断言
- Tips： Babel: 解决添加时使用 node 模块的问题（module.exports/require）
  - 安装：  `npm install @babel/core @babel/register --save-dev`
  - 用项目中的 mocha 跑：   `./node_modules/.bin/mocha --require @babel/register`
  - package.json：寻找本项目中的 package  `mocha --require @babel/register`

### Code coverage: [nyc](https://github.com/istanbuljs/nyc)
- 主要配置
  - .nycrc   
    ```
    {
      "extends": "@istanbuljs/nyc-config-babel"
    }
    ```
  - .babelrc   
    ```
    {
      "plugins": ["istanbul"]
    }
    ```
    
### Tips：
通过YOEMAN把配置模板化

### 测试执行 HTML-PARSER
- npm install
- npm install css
- npm test
- npm run coverage
