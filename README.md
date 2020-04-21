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
* 在./config-overrides.js添加addDecoratorsLegacy按序加载修饰器方法配置
* 在./jsconfig.json中设置experimentalDecorators装饰器
* 增加redux功能
* 总览页添加Skeleton、Card、Tabs、Avatar，Row, Col等组件。在overview.js中添加标签页、轮播图、经过封装的书籍信息自定义组件BookInfo.js


## 知识点记录
* 封装自定义组件方法
    1. 在适合文件位置新建文件，设计组件样式，需要参数变量传入的值以`defaultProps`的形式给定初值，以`this.props.param`的形式调用,若在使用该组件的文件中给定了该参数的新值，props会实时更新该值
    ```
        import React, { Component } from 'react'
        import { Card, Skeleton, Avatar,Tag } from 'antd'

        export default class BookInfo extends Component {

            static defaultProps={
                //Skeleton参数
                avatar :true,
                loading:false,
                paragraph: true,
                active: true,
            }

            render() {
                const {Meta} =Card;
                
                return (
                    <Card bordered={false}>
                        <Skeleton
                            avatar={this.props.avatar}
                            loading={this.props.loading}
                            paragraph={this.props.paragraph}
                            active={this.props.active}
                        >
                        </Skeleton>
                    </Card>
                )
            }
        }

    ```
    2. 在需要用到该组件的文件中引入组件
    `import BookInfo from '../../../common/public/BookInfo'`
    3. 使用该组件,将自定义组件中需要的参数赋值
    ```
    <BookInfo 
        loading={false} 
        avatarUrl='imgs/img1.png' 
        bookName='中华上下五千年' 
        authorName='佚名'
        />
    ```