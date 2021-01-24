学习笔记

## 配置 JSX 环境
- webpack：压缩JS包
- babel： 代码转译，即将目标代码转译为能够符合期望语法规范的代码   

### 安装步骤
` npm init   `   
` npm install -g webpack webpack-cli // 静态模块打包工具 `   
` npm install --save-dev webpack babel-loader `   
` npm i --save-dev @babel/core @babel/preset-env `   
` npm i --save-dev webpack-dev-server `
` npm i --save-dev webpack-cli `

webpack.config.js   
``` module.exports = {
  entry: "./main.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              [
                "@babel/plugin-transform-react-jsx",
                { pragma: "createElement" },
              ],
            ],
          },
        },
      },
    ],
  },
};  ```

### Windows Tips: 利用管理员身份打开powershell
键入：Set-ExecutionPolicy RemoteSigned，弹出如下内容，继续输入：Y