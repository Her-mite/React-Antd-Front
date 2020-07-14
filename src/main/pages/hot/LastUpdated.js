import React from 'react'
import HotBook from './HotBook'
import { message } from "antd"
import axios from 'axios'



export default class LastUpdated extends React.Component{
    constructor(){
        super()
        this.state = {
            lastupdated:[]
          }
    }
    componentDidMount=async()=>{
        try {
            const response = await axios.get('/api/book/queryBookinfo', { params: { booktable: "lastUpdatedbook" } })
            if(response.data.code!==200){
                message.error('返回报文出错')
                console.log(response.data.data);
                return
            }
            this.lastupdated =response.data.data
            await this.setState({lastupdated:response.data.data})
            console.log(this.state.lastupdated);
            
        } catch (error) {
            message.error("请求出错")
            console.log(error);
            
        }
    }
    
    render(){
            return(
                <div style={{backgroundColor:"#fff"}}>
                    <HotBook bookdata ={this.state.lastupdated} type="lastUpdated"></HotBook>
                </div>
                )
    }
}