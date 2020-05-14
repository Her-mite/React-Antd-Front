import React, { Component } from 'react'
import { Card, Skeleton, Avatar, Tag, Tooltip } from 'antd'

/**
 * 图书信息组件封装
 * @param avatar 是否展示框架头像skeleton
 * @param loading 是否展示框架
 * @param paragraph 是否展示段落
 * @param active skeleton是否动态展示
 */

export default class BookInfo extends Component {

    static defaultProps = {
        //Skeleton参数
        avatar: true,
        loading: false,
        paragraph: true,
        active: true,

        avatarUrl: '../assets/icon.jpg',   //头像图片路径（在common/assets/路由下）
        bookName: '暂无名称',    //书名
        bookDescription: "无对应书籍信息描述",//书籍描述
        authorName: "作者姓名",   //作者姓名
        category:"书籍类型",     //书籍类型
    }

    render() {
        const { Meta } = Card;
        // let coverUrl = '../data/bookPic/' + this.props.avatarUrl + '.jpg'
        // console.log(coverUrl);

        return (
            <Card bordered={false} style={{
                // backgroundImage:'url('+require("../assets/imgs/avatar.png")+')', //todo：找一张好看的图
                backgroundRepeat:'no-repeat',
                backgroundSize:"100% 100%"}}>
                <Skeleton
                    avatar={this.props.avatar}
                    loading={this.props.loading}
                    paragraph={this.props.paragraph}
                    active={this.props.active}
                >
                    <Meta
                        style={{ marginBottom: 20, }}
                        avatar={<Avatar src={require('../data/kehuanPic/' + this.props.avatarUrl + '.jpg')} />}
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
                                {/* 书籍类型 */}
                                <Tag color="#2db7f5" style={{  widows: 50, }}>
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
                    <div style={{ textAlign: 'center' }}>
                        <img
                            alt="封面"
                            avatar={<Avatar src={this.props.avatarUrl} />}

                        src={require('../data/kehuanPic/' + this.props.avatarUrl + '.jpg')}
                        />
                    </div>

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
        width: 130,
        overflow: 'hidden',
        textOverflow:'ellipsis' //设置超出文本内容显示...
    },
    //描述栏样式
    description: {
        width: 200, // 必须指定宽度
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        webkitLineClamp: '3',
        webkitBoxOrient: 'vertical',
    }
}


