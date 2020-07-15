import React from 'react'
import { Button} from 'antd'
import axios from 'axios'


export default class Collection extends React.Component {

    state={
        bookname: "", // 书名
        bookContent: "",    // 书籍内容
        title:""    // 章节标题
    }

    componentDidMount=async()=>{
        // 进入新页面完成数据获取工作
        let bookname = this.props.history.location.search
        bookname = JSON.parse(decodeURI(bookname.substr(1, bookname.length)))
        const response = await axios.get('/api/bookContent/queryBookContent',{ params: { bookname: bookname }} )
        
        this.setState({
            bookname:bookname,
            bookContent: response.data.data[0].content,
            title: response.data.data[0].title
        })        

    }


    render() {
        return (
            <Button>{this.state.title}</Button>

        )
    }
}