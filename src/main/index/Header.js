import React,{Component} from "react"
import {MenuUnfoldOutlined,MenuFoldOutlined} from '@ant-design/icons'

import {connect} from 'react-redux'
import {setSiderCollapsed} from '../actions/index'

const mapStateToProps = state =>{
    return {
        'siderCollapsed':state.index.siderCollapsed
    }
}

@connect(mapStateToProps,{setSiderCollapsed})
class Header extends Component{

    //选择展开或是缩小侧边栏
    toggle = () => {
        this.props.setSiderCollapsed()
    }


    render(){
        return(
                <div>
                    {React.createElement(this.props.siderCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined,{
                            onClick:this.toggle
                        })}
                </div>
                        
        )
    }
}

export default Header