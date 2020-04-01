import React,{Component} from "react"
import {Button, Layout,Menu} from "antd"
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  } from '@ant-design/icons';

const {Header, Sider, Content} = Layout

export default class Index extends Component{
    render(){
        return(
            <Layout style={{height:'100vh'}}>
                <Sider trigger={null} collapsed = {false} collapsible>
                    <Menu theme="dark" mode="inline" defaultSelectdKeys={['1']}>
                        <Menu.Item key = "1">
                            <UserOutlined/>
                            <span>nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <VideoCameraOutlined />
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                        <UploadOutlined />
                            <span>nav 3</span>
                            </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{padding:0}}>
                        {React.createElement(MenuUnfoldOutlined )}
                    </Header>
                </Layout>
                <Layout>
                    <Content>
                        somethig
                    </Content>
                </Layout>
            </Layout>
        )
    }
}