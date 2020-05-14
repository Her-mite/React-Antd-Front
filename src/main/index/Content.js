import React,{Component} from "react"
import { Tabs } from "antd"

import { tabs } from '../../common/public/tab.js'

import {connect} from 'react-redux'
import {setTest,setPanes,setActiveKey} from '../actions/index'

const {TabPane} = Tabs

const mapStateToProps = state =>{
    return {
        'panes':state.index.panes,
        'activeKey':state.index.activeKey,
        'test':state.index.test,
    }
}


@connect(mapStateToProps,{setTest,setPanes,setActiveKey})
class Content extends Component{

    //状态提升 todo：了解状态提升
    constructor(props){
        super(props);

        this.state={
            activeKey:this.props.panes[0].key,
        }    
    }
    componentDidMount(){        
        console.log(this.props.activeKey);
    }
    //tab被点击时调用
    onTabClick = targetKey =>{
        this.props.setActiveKey(targetKey)    
    }

    //关闭标签页
    remove = targetKey =>{
        
        let{activeKey} = this.props
        let lastIndex 
        if(this.props.panes.length>1){
            //找到点击删除tab页的数组索引的前一个页面
            this.props.panes.forEach((pane,i)=>{                
                if(pane.key===targetKey){
                    lastIndex = i - 1        
                    console.log(lastIndex)            
                }
            })
        
            //删除指定tab
            const panes = this.props.panes.filter(pane=>pane.key!==targetKey);
            //当删除当前激活页面时 将激活页面设置为删除页面的前一个页面
            if(panes.length&&activeKey===targetKey){
                if(lastIndex>=0){
                    activeKey=panes[lastIndex].key
                }else{
                    activeKey =panes[0].key
                }
            }
            // this.setState({panes,activeKey})
            this.props.setPanes(panes)
            this.props.setActiveKey(activeKey)
        }
    }

    //标签页修改时调用
    onEdit=(targetKey,aciton) =>{
        this[aciton](targetKey)
    }

    render(){
        return(
            <Tabs
                type="editable-card"
                onchange={this.toggle}
                onTabClick={this.onTabClick}
                onEdit={this.onEdit}
                activeKey={this.props.activeKey}  
                animated={true}
                hideAdd      
            >
                {this.props.panes.map(pane=>(
                    <TabPane tab ={pane.name} key = {pane.key}>
                        {tabs[pane.key]}
                    </TabPane>
                ))}

            </Tabs>
                        
        )
    }
}

export default Content