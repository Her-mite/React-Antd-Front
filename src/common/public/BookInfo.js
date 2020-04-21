import React, { Component } from 'react'
import { Card, Skeleton, Avatar,Tag } from 'antd'

/**
 * 图书信息组件封装
 * @param avatar 是否展示框架头像skeleton
 * @param loading 是否展示框架
 * @param paragraph 是否展示段落
 * @param active skeleton是否动态展示
 */

export default class BookInfo extends Component {

    static defaultProps={
        //Skeleton参数
        avatar :true,
        loading:false,
        paragraph: true,
        active: true,

        avatarUrl:'icon.jpg',   //头像图片路径（在common/assets/路由下）
        bookName:'暂无名称',    //书名
        bookDescription:"文章标题ask觉得能内容写作开心就好天天开罗分厘卡大厦的卡片你不雅这样贼看着我我的脸上",//书籍描述
        authorName:"作者姓名"   //作者姓名
    }

    render() {
        const {Meta} =Card;
        
        return (
            <Card bordered={false}>
                <Skeleton
                    avatar={this.props.avatar}
                    loading={this.props.loading}
                    paragraph={this.props.paragraph}
                    active={this.props.active}
                >
                    <Meta
                        style={{ marginBottom: 20 }}
                        avatar={<Avatar src={require('../assets/'+this.props.avatarUrl)} />}
                        title={<div><span>{this.props.bookName}</span><Tag color="#2db7f5" style={{ widows: 50, marginLeft: 20 }}>{this.props.authorName}</Tag></div>}
                        description={this.props.bookDescription}
                    />
                </Skeleton>
            </Card>
        )
    }
}



