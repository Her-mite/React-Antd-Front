import React,{Component} from "react"
import { Layout,Menu, Tabs, } from "antd"
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    createFromIconfontCN
  } from '@ant-design/icons';//从 4.0 开始，antd 不再内置 Icon 组件，请使用独立的包 @ant-design/icons。

import { menu, tabs} from '../../common/public/tab.js'

const {Header, Sider, Content} = Layout
const {TabPane} = Tabs
const IconFont =  createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1736378_8qg6rvln25n.js', //阿里代码库自定义图标库
})

export default class Index extends Component{


    //状态提升 todo：了解状态提升
    constructor(props){
        super(props);
        //标签页元素
        let panes = [
            {name:menu[0].name, key:menu[0].key,content:menu[0].content,},
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
        if(this.state.panes.length>1){
            //找到点击删除tab页的数组索引的前一个页面
            this.state.panes.forEach((pane,i)=>{                
                if(pane.key===targetKey){
                    lastIndex = i - 1        
                    console.log(lastIndex)            
                }
            })
        
            //删除指定tab
            const panes = this.state.panes.filter(pane=>pane.key!==targetKey);
            //当删除当前激活页面时 将激活页面设置为删除页面的前一个页面
            if(panes.length&&activeKey===targetKey){
                if(lastIndex>=0){
                    activeKey=panes[lastIndex].key
                }else{
                    activeKey =panes[0].key
                }
            }
            this.setState({panes,activeKey})
        }
    }

    //标签页修改时调用
    onEdit=(targetKey,aciton) =>{
        this[aciton](targetKey)
    }

    //菜单生成
    renderMenu = (menu)=>{
        if(Array.isArray(menu)){
            return menu.map(item =>{
                if(!item.children||!item.children.length){                    
                    return(
                        <Menu.Item key={item.key}> 
                            <div onClick={()=>this.addPanes(item)}>
                                {item.icon && <IconFont type ={item.icon} style={{color:"#ffffff"}}/>}
                                <span>{item.name}</span>
                            </div>
                        </Menu.Item>
                    )
                }else{
                    return(
                        <Menu.SubMenu
                            key={item.key}
                            title={<span>{item.icon && <IconFont type={item.icon} />}<span>{item.name}</span></span>}
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
    }

    //点击菜单后增加标签页
    addPanes=(item)=>{

        let panes = this.state.panes.slice();
        let activeMenu = item.key

        if(!panes.find(i => i.key === activeMenu)){
            panes.push({
                key:item.key,
                name:item.name,
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
                            <a href='.'>
                                <img src = {require( '../../common/assets/icon.jpg')} style = {{float:'left',margin:10,width:50,height:40}} alt="icon"></img>
                                <h1 style={{color:"white",fontSize:20,lineHeight:'50px'}}>标题栏</h1>
                            </a>
                        </div>
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys ={['title1']}>
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
                            onchange={this.toggle}
                            onTabClick={this.onTabClick}
                            onEdit={this.onEdit}
                            activeKey={this.state.activeKey}  
                            animated={true}
                            hideAdd                          
                        >
                            {this.state.panes.map(pane=>(
                                <TabPane tab ={pane.name} key = {pane.key} 
                                >
                                    {tabs[pane.key]}
                                </TabPane>
                            ))}

                        </Tabs>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}