import React, { Component } from "react"
import { Layout, } from "antd"

import { menu, } from '../../common/public/tab.js'
import { connect } from 'react-redux'
import { setTest, setSiderCollapsed } from '../actions/index'

import Header from './Header'
import Sider from './Sider'
import Content from './Content'

const mapStateToProps = state => {
    return {
        'test': state.index.test,
        'siderCollapsed': state.index.siderCollapsed

    }
}

@connect(mapStateToProps, { setTest, setSiderCollapsed })
class Index extends Component {


    //状态提升 todo：了解状态提升
    constructor(props) {
        super(props);
        //标签页元素
        let panes = [
            { name: menu[0].name, key: menu[0].key, content: menu[0].content, },
        ]

        this.state = {
            activeKey: panes[0].key, //当前显示页面
            panes

        }


    }

    //选择展开或是缩小侧边栏
    toggle = () => {
        this.props.setSiderCollapsed()
    }




    render() {
        return (
            <Layout style={{ height: '100vh' }}>
                {/* 侧边选择栏 */}
                <Layout.Sider trigger={null} collapsed={this.props.siderCollapsed} collapsible>
                    <Sider />
                </Layout.Sider>

                <Layout>
                    {/* 头部区域 */}
                    <Layout.Header style={{ paddingLeft: 10, background: '#fff', float: 'right', display: 'flex' }}>
                        <Header />
                    </Layout.Header>

                    {/* 内容区域 */}
                    <Layout.Content style={{ background: '#fff', margin: 10, padding: 12 }}>
                        <Content />
                    </Layout.Content>
                </Layout>
            </Layout>
        )
    }
}

export default Index