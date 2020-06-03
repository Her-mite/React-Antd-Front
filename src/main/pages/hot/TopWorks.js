import React from "react"
import HotBook from './HotBook'
import axios from 'axios'
import { message } from "antd"

export default class TopWorks extends React.Component{
    constructor(){
        super();
        //防止出现异步传值数据不同步的问题
        this.state={
            newbook:[]
        }
    }
    componentDidMount=async()=>{
        try {
            const response = await axios.get('/api/book/queryBookinfo', { params: { booktable: "newbook" } })
            if(response.data.code!==200){
                message.error('返回报文出错')
                console.log(response.data.data);
                return
            }
            this.setState({
                newbook:response.data.data
            })            
            
        } catch (error) {
            message.error("请求出错")
            console.log(error);
        }
    }

    render(){
        return(
            <HotBook bookdata ={this.state.newbook} type ="newBook"></HotBook>
        )
    }
}