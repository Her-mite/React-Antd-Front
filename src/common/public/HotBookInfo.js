import React, { Component } from 'react'
import { Card, Skeleton, Avatar, Tag, Tooltip, Popover, notification, message } from 'antd'
import {HeartOutlined, HeartTwoTone, CheckOutlined, CheckCircleTwoTone} from '@ant-design/icons'
import axios from 'axios'
/**
 * 热门图书信息组件封装
 * @param avatar 是否展示框架头像skeleton
 * @param loading 是否展示框架
 * @param paragraph 是否展示段落
 * @param active skeleton是否动态展示
 */

export default class HotBookInfo extends Component {

    static defaultProps = {
        //Skeleton参数
        avatar: true,
        loading: false,
        paragraph: true,
        active: true,

        type:'',    //设置书籍类型，方便图片路径读取
        avatarUrl: '../assets/icon.jpg',   //头像图片路径（在common/assets/路由下）
        bookName: '暂无名称',    //书名
        bookDescription: "无对应书籍信息描述",//书籍描述
        authorName: "作者姓名",   //作者姓名
        category:"书籍类型",     //书籍类型
        hasRead:0,            //是否读过
        collection:0       //是否收藏
    }

    componentDidMount= async()=>{
        try {
            const response = await axios.post('/api/book/queryHasStore',{bookname:this.props.bookName})
            if(response.data.code!==200){
                message.error('请求有误')
                throw new Error('返回数据有误')
            }
            await this.setState({
                hasRead:response.data.data.hasRead,
                collection:response.data.data.collection
            })

        } catch (error) {
            message.error("数据初始化出错！")
        }        
        
    }

    state = {
        hasRead: 0,
        collection: 0,
    }
    //点击是否想看响应事件
    clickTag = async (tag) => {
        let params = {
            bookname: this.props.bookName,
            author: this.props.authorName,
            description: this.props.bookDescription,
            category: this.props.category,
            pictureUrl: this.props.type,
            type:tag
        }
        let paramDel={
            bookname:this.props.bookName,
            type:tag
        }
        if (tag === 'hasRead') {
            console.log(this.props.bookName);
            
            //发送参数请求修改数据库
            try {
                let response 
                if(this.state.hasRead){
                    //书籍已加入已读，点击则从表中删除
                    response = await axios.delete('/api/book/deleteBookFromHasRead', {data:paramDel})
                }else{
                    response = await axios.put('/api/book/addBookToHasRead', params)

                }                
                if (response.data.code !== 200) {
                    message.error(response.data.message)
                    return
                }
            } catch (error) {
                message.error("出现错误")
                console.log(error);
                return
            }
            await this.setState({
                hasRead: !this.state.hasRead,
            })
            if (this.state.hasRead) {
                notification.success({
                    message: '已添加到已读',
                    description: '此书已为你放入你的已读中，请进入已读页面查看',
                    duration: 2,
                });
            } else {
                notification.info({
                    message: '已取消添加到已读',
                    description: '已将本书移出你的已读中1',
                    duration: 2,
                })
            }

        } else {
            //发送参数请求修改数据库
            try {
                let response 
                if(this.state.collection){
                    //书籍已加入已读，点击则从表中删除
                    response = await axios.delete('/api/book/deleteBookFromHasRead', {data:paramDel})
                }else{
                    response = await axios.put('/api/book/addBookToHasRead', params)

                }                
                if (response.data.code !== 200) {
                    message.error(response.data.message)
                    return
                }
            } catch (error) {
                message.error("出现错误")
                console.log(error);
                return
            }
            await this.setState({
                collection: !this.state.collection
            })
            if (this.state.collection) {
                notification.success({
                    message: '已添加到收藏夹',
                    description: '此书已为你放入你的收藏中，请进入收藏页面查看',
                    duration: 2,
                });
            } else {
                notification.info({
                    message: '已取消添加到收藏',
                    description: '已将本书移出你的收藏中',
                    duration: 2,

                })
            }
        }
    }

    render() {
        const { Meta } = Card;
        
       

        //悬浮窗口样式布局
        const popover = (
            <div>
                <Tag 
                    icon ={this.state.collection?<HeartTwoTone />:<HeartOutlined />} 
                    color={this.state.collection?'#f50':'volcano' }
                    onClick={()=>this.clickTag('collection')} 
                    >{this.state.collection?"已收藏":"收藏"}</Tag>
                <Tag 
                    icon={this.state.hasRead?<CheckCircleTwoTone />:<CheckOutlined />} 
                    color={this.state.hasRead?'gold':'cyan'}
                    onClick={()=>this.clickTag('hasRead')} 
                    >{this.state.hasRead?"不想看了":"想看"}</Tag>
            </div>
        )
        

        return (
            <Card bordered={false}
                style={{
                // backgroundColor:'#ff00ff',
                // backgroundImage:'url('+require("../assets/imgs/avatar.png")+')', //todo：找一张好看的图
                backgroundRepeat:'no-repeat',
                backgroundSize:"100% 100%"}}>

                <Skeleton
                    avatar={this.props.avatar}
                    loading={this.props.loading}
                    paragraph={this.props.paragraph}
                    active={this.props.active}
                    style={{padding:55,backgroundColor:'#00ff00'}}
                    >
                    <Popover content={popover} placement='rightTop'>
                        <img
                            alt="封面"
                            style={{float:'left',height:160,width:120, marginRight:10}}
                            avatar={<Avatar src={this.props.avatarUrl} />}
                            src={require('../data/'+this.props.type+'Pic/' + this.props.avatarUrl + '.jpg')}
                        />
                    </Popover>

                    <Meta
                        style={{ marginLeft:10 }}
                        title={<div>
                            {/* 鼠标悬停显示完整书名 */}

                            <Tooltip placement="topLeft" title={this.props.bookName}>
                                <span style={styles.title}>
                                    {this.props.bookName}
                                </span>
                            </Tooltip>
                            {/* 书籍类型 */}
                            <Tag color="cyan">{this.props.category}</Tag>

                            <div>
                                {/* 作者名称 */}
                                <Tag color="#2db7f5" style={{  float:'left', marginTop:5}}>
                                    {this.props.authorName}
                                </Tag>
                            </div>
                        </div>}
                        description={
                            <div style={styles.description}>
                                <Tooltip
                                    placement="topLeft" title={this.props.bookDescription}
                                >{this.props.bookDescription}</Tooltip>
                            </div>}
                    />
                   

                </Skeleton>
            </Card>
        )
    }
}

//设置样式属性
const styles = {
    //书籍名称栏样式
    title: {
        float: 'left',
        display: "block",
        textAlign:'left',
        width: 230,
        overflow: 'hidden',
        textOverflow:'ellipsis' //设置超出文本内容显示...
    },
    //描述栏样式
    description: {
        width: 280, // 必须指定宽度
        minHeight:70,
        textAlign:'left',
        // overflow: 'hidden',
        textOverflow: 'ellipsis',//文本溢出显示省略号
        display: '-webkit-box',//弹性伸缩盒子 结合webkitLineClamp
        WebkitLineClamp: '4',
        WebkitBoxOrient: 'vertical',
        marginTop:20,
    }
}


