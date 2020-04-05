import React,{Component} from "react"
import { Layout,Menu, Tabs, Icon} from "antd"
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';

import { menu } from '../../common/public/tab.js'

const {Header, Sider, Content} = Layout
const {TabPane} = Tabs
const {SubMenu} = Menu

export default class Index extends Component{


    //状态提升 todo：了解状态提升
    constructor(props){
        super(props);
        //标签页元素
        let panes = [
            {name:"panes1", content:"contentt11",key:'1'},
            {name:"panes2", content:"conten223", key:'2'},
            {name:"nanes3", content:"contend33333", key:'3'}
    
        ]

        this.state = {
            siderCollapsedFlag:false,
            activeKey:panes[0].key, //当前显示页面
            panes
    
        }
    

    }
    
    //选择展开或是缩小侧边栏
    toggle = () => {
        this.setState({
            siderCollapsedFlag:!this.state.siderCollapsedFlag
        })
    }
    
    //tab被点击时调用
    onTabClick = targetKey =>{
        console.log(targetKey);
        this.setState({
            activeKey:targetKey
        })
        
    }

    //关闭标签页
    remove = targetKey =>{
        
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
        console.log("dasdas")
        this[aciton](targetKey)
    }

    //菜单生成
    renderMenu = (menu)=>{
        if(Array.isArray(menu)){
            return menu.map(item =>{
                if(!item.children||!item.children.length){
                    console.log(item.icon);
                    
                    return(
                        
                        <Menu.Item key={item.name}> 
                        
                        <Icon
                            style={{ fontSize: 18 }}
                            type={'menu-unfold'}
                        ><span>sads</span></Icon>
                            <div onClick={()=>this.addPanes(item)}>
                                {item.icon && <Icon type={item.icon} />}
                                <span>{item.name}{item.icon}</span>
                            </div>

                        </Menu.Item>
                    )
                }else{
                    return(
                        <Menu.SubMenu
                            key={item.key}
                            title={<span>{item.icon && <Icon type={"home"} />}<span>{item.name}</span></span>}
                            onTitleClick={()=>{
                                if(!item.titleClick||!item.titleClick.length){
                                    return null
                                }else{
                                    return this.addPanes(item)
                                }
                            }}
                        >
                        {this.renderMenu(item.children)}
                        </Menu.SubMenu>
                    )
                }
            })
        }
        console.log(menu)
    }

    //点击菜单后增加标签页
    addPanes=(item)=>{

        let panes = this.state.panes.slice();
        let activeMenu = item.key

        if(!panes.find(i => i.key === activeMenu)){
            panes.push({
                name:item.name,
                key:item.key,
                content:item.content,
            })
        }
        
        this.setState({
            panes:panes,
            activeKey:item.key
        })

        
        
    }

    render(){
        return(
            <Layout style={{height:'100vh'}}>
                {/* 侧边选择栏 */}
                <Sider trigger={null} collapsed = {this.state.siderCollapsedFlag} collapsible>
                    <div style ={{position:"relative"}}>
                        <div style={{height:50,marginTop:10,overflow:"hidden",position: "relative"}}>
                            <a >
                                <img src = {require( '../../common/assets/icon.jpg')} style = {{float:'left',margin:10,width:50,height:40}}></img>
                                <h1 style={{color:"white",fontSize:20,lineHeight:'50px'}}>标题栏</h1>
                            </a>
                        </div>
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectKeys ={['2']}>
                        {this.renderMenu(menu)}
                    </Menu>
 
                </Sider>

                <Layout>
                    {/* 头部区域 */}
                    <Header style={{paddingLeft:10,paddingTop:25, background:'#fff',float:'right',display:'flex'}}>
                        {React.createElement(this.state.siderCollapsedFlag ? MenuUnfoldOutlined : MenuFoldOutlined,{
                            onClick:this.toggle
                        })}
                    </Header>

                    {/* 内容区域 */}
                    <Content style={{background:'#fff',margin:10,padding:12}}>
                        <Tabs
                            type="editable-card"
                            size={"small"}
                            onchange={this.toggle}
                            onTabClick={this.onTabClick}
                            onEdit={this.onEdit}
                            activeKey={this.state.activeKey}
                            
                        >
                            {this.state.panes.map(pane=>(
                                <TabPane tab ={pane.name} key = {pane.key} 
                                >
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