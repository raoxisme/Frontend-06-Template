## 工具链 - 初始化与构建

###  初始化工具：Yeoman
- Getting Started
npm install --save-dev yeoman-generator    
npm install -g yo   
- 通过命令行与用户交互： async prompting()
- Interacting with the template: this.fs.copyTpl

### 管理依赖  
```
class extends Generator {
  installingLodash() {
    this.npmInstall(['lodash','vue@x.x.x'], { 'save-dev': true });
  }
} 
```
   
### build 工具：Webpack
- 多文件合并。通过 loader 和 plugin ，来控制合并规则和文本转换。
- webpack-cli: 不包括在 webpack 依赖中
- webpack.config.js: loader：转译源代码到目标代码

### JavaScript compiler: Babel
- npm install -g @babel/core @babel/cli
- npm link ==> 快速调试和测试本地开发 npm 模块。

### npx - 用来解决全局命令行工具只能有一个的问题
- 临时安装可执行依赖包，不用全局安装。
- 自动加载 node_modules 中依赖包，不用指定$PATH。
-  先检查本地有没有安装某个 package，如果没有去远程 registry 找，找到的话直接使用，不用下载到本地 node-modules 包里面，这样就能优化本地项目的大小，也可以避免安装 package 到全局
