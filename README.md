# 启动步骤
+ npm install
+ npm start

# 项目结构
## 入口文件
src/index.js
## src/pages
存放各页面文件
## src/assets
资源文件
## config-overrides.js
使用react-app-rewired修改create-react-app webpack设置
[官方文档](https://github.com/timarney/react-app-rewired)


# 搭建步骤
## 安装脚手架 create-react-app
```
npm install -g create-react-app
create-react-app demo
```
## 安装react-router
`npm install react-router-dom`
## 安装antd
`npm install antd`
### 按需加载antd
* `npm install react-app-rewired`
* `npm install babel-plugin-import`
* `在package.json里修改启动方式`
```
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  }
  ```
  * `在项目根目录新建一个config-overrides.js文件用于修改默认配置`

 * `在config-overrides.js中添加如下配置`
  ```
  const { override, fixBabelImports } = require('customize-cra');

  module.exports = override(
      fixBabelImports('import', {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: 'css',
      }),
  );
  ```
[官方文档](https://ant.design/docs/react/use-with-create-react-app-cn#高级配置)

## 修改记录
* ./index.js 中增加指向首页index的路由
* 在./src/main/index/index.js添加tabs、sider组件