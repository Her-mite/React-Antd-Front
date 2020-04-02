import React,{Component} from "react"
import {Button, Layout,Menu, Tabs} from "antd"
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  } from '@ant-design/icons';

const {Header, Sider, Content} = Layout
const {TabPane} = Tabs

export default class Index extends Component{


    //状态提升 todo：了解状态提升
    constructor(props){
        super(props);
        //标签页元素
        const panes = [
            {title:"panes1", content:"contentt11",key:'1'},
            {title:"panes2", content:"conten223", key:'2'},
            {title:"nanes3", content:"contend33333", key:'3'}
    
        ]

        this.state = {
            siderCollapsedFlag:false,
            activeKey:panes[0].key,
            panes
    
        }
    

    }
    
    //选择展开或是缩小侧边栏
    toggle = () => {
        this.setState({
            siderCollapsedFlag:!this.state.siderCollapsedFlag
        })
    }

    //关闭标签页
    remove = targetKey =>{
        console.log("13asdajljkljkl");
        
        let{activeKey} = this.state
        let lastIndex 
        this.state.panes.forEach((pane,i)=>{
            console.log(pane.key+"das"+targetKey);
            
            if(pane.key===targetKey){
                lastIndex = i - 1 
                console.log("shibie");
                
            }
        })
        console.log(this.state.panes);
        

        const panes = this.state.panes.filter(pane=>pane.key!==targetKey);
        if(panes.length&&activeKey===targetKey){
            if(lastIndex>=0){
                activeKey=panes[lastIndex].key
            }else{
                activeKey =panes[0].key
            }
        }
        console.log(panes);
        
        this.setState({panes,activeKey})
    }

    //标签页修改时调用
    onEdit=(targetKey,aciton) =>{
        this[aciton](targetKey)
    }

    render(){
        return(
            <Layout style={{height:'100vh'}}>
                <Sider trigger={null} collapsed = {this.state.siderCollapsedFlag} collapsible>
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
                    <Header style={{paddingLeft:10,paddingTop:25, background:'#fff',float:'right',display:'flex'}}>
                        {React.createElement(this.state.siderCollapsedFlag ? MenuUnfoldOutlined : MenuFoldOutlined,{
                            onClick:this.toggle
                        })}
                    </Header>

                    <Content style={{background:'#fff',margin:10,padding:12}}>
                        <Tabs
                            type="editable-card"
                            size={"small"}
                            onchange={this.toggle}
                            onEdit={this.onEdit}
                            
                        >
                            {this.state.panes.map(pane=>(
                                <TabPane tab ={pane.title} key = {pane.key}>
                                    {pane.content}
                                </TabPane>
                            ))}

                        </Tabs>
                        something
                    </Content>
                </Layout>
            </Layout>
        )
    }
}