import React,{Component} from "react"
import { Menu, } from "antd"
import { createFromIconfontCN, } from '@ant-design/icons';//从 4.0 开始，antd 不再内置 Icon 组件，请使用独立的包 @ant-design/icons。
import { menu,} from '../../common/public/tab.js'

import {connect} from 'react-redux'
import {setTest,setPanes,setActiveKey} from '../actions/index'


const IconFont =  createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1736378_8qg6rvln25n.js', //阿里代码库自定义图标库
})

const mapStateToProps = state =>{
    return {
        'panes':state.index.panes,
        'test':state.index.test,
        'activeKey':state.index.activeKey
    }
}

@connect(mapStateToProps,{setTest,setPanes,setActiveKey})
class Sider extends Component{

    //点击菜单后增加标签页
    addPanes=(item)=>{
        let panes = this.props.panes.slice();
        let activeMenu = item.key

        if(!panes.find(i => i.key === activeMenu)){
            panes.push({
                key:item.key,
                name:item.name,
                content:item.content,
            })
        }
        
        this.props.setPanes(panes)
        this.props.setActiveKey(item.key)

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

    render(){
        return(
                <div>
                   <div style ={{position:"relative"}}>
                        <div style={{height:50,marginTop:10,overflow:"hidden",position: "relative"}}>
                            <a href='.'>
                                <img src = {require( '../../common/assets/icon.jpg')} style = {{float:'left',margin:10,width:50,height:40}} alt="icon"></img>
                                <h1 style={{color:"white",fontSize:20,lineHeight:'50px'}}>标题栏</h1>
                            </a>
                        </div>
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys ={['overview']}>
                        {this.renderMenu(menu)}
                    </Menu>
                </div>
                        
        )
    }
}

export default Sider