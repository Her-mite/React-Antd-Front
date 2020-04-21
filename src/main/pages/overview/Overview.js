import React from "react"
import { Carousel, Card, Row, Col, Avatar, Tag, Tabs } from "antd"
import '../../../common/assets/style.css'
import BookInfo from '../../../common/public/BookInfo'

const { TabPane } = Tabs

export default class Overview extends React.Component {
    // onChange = () => {
    //     console.log("1123");
    // }
    state ={
        test :true
    }
    render() {
        const { Meta } = Card
        return (
            <div>
                {/* 导航选择栏，可选择不同类型书籍 */}
                <Tabs className='TableStyle' defaultActiveKey="literature">
                    <TabPane tab="文学" key="literature" />
                    <TabPane tab="艺术" key="art" />
                    <TabPane tab="历史" key="history" />
                    <TabPane tab="文化" key="Culture" />
                    <TabPane tab="哲学" key="philosophy" />
                </Tabs>

                {/* 展示轮播图效果 */}
                <Carousel afterChange={this.onChange} autoplay dots={false}>
                    <div><h3><img src={require('../../../common/assets/imgs/img1.png')} alt="logo1" /></h3></div>
                    <div><h3><img src={require('../../../common/assets/imgs/img2.png')} alt="logo2" /></h3></div>
                    <div><h3><img src={require('../../../common/assets/imgs/img3.png')} alt="logo3 " /></h3></div>
                </Carousel>

                {/* 分三列展示书籍信息 */}
                <Row className="content-divide" justify="space-around">
                    <Col span={7} className="gutter-row" style={{ background: "#998821" }}>
                        <div style={{ background: "#dd99ff" }}>

                            <BookInfo 
                                loading={false} 
                                avatarUrl='imgs/img1.png' 
                                bookName='中华上下五千年' 
                                authorName='佚名'
                                bookDescription='这是一条神奇的天路，我的老家，就住在这个屯，我爱你，是多么清楚多么坚固的信仰，我爱你，是来自灵魂来自生命的力量' 
                                />
                            
                            <Card>
                                <Meta
                                    style={{ marginBottom: 20 }}
                                    avatar={<Avatar src={require("../../../common/assets/imgs/avatar.png")} />}
                                    title={<div><span>书籍名称</span><Tag color="#2db7f5" style={{ widows: 50, marginLeft: 20 }}>{"作者姓名"}</Tag></div>}
                                    description={"文章标题ask觉得能内容啊实打实大苏打实打实啊实打实大苏打士大夫请问请问公司的股份三亚是否写作阿三打撒萨达萨达卡片你不雅这样贼看着我  我的脸上"}
                                />
                                <Meta
                                    style={{ marginBottom: 20 }}
                                    avatar={<Avatar src={require("../../../common/assets/imgs/avatar.png")} />}
                                    title={<div><span>书籍名称</span><Tag color="#2db7f5" style={{ widows: 50, marginLeft: 20 }}>{"作者姓名"}</Tag></div>}
                                    description={"文章标题ask觉得能内容写作开心就好天天开罗分厘卡大厦的卡片你不雅这样贼看着我  我的脸上"}
                                />
                            </Card>
                        </div>
                    </Col>
                    <Col span={7} className="gutter-row" style={{ background: "#513123" }}>
                        <Card bordered={false}>
                            <Meta
                                style={{ marginBottom: 20 }}
                                avatar={<Avatar src={require("../../../common/assets/imgs/avatar.png")} />}
                                title={<div><span>书籍名称</span><Tag color="#2db7f5" style={{ widows: 50, marginLeft: 20 }}>{"作者姓名"}</Tag></div>}
                                description={"文章标题ask觉得能内容写作开心就好天天开罗分厘卡大厦的卡片你不雅这样贼看着我  我的脸上"}
                            />
                            <Meta
                                style={{ marginBottom: 20 }}
                                avatar={<Avatar src={require("../../../common/assets/imgs/avatar.png")} />}
                                title={<div><span>书籍名称</span><Tag color="#2db7f5" style={{ widows: 50, marginLeft: 20 }}>{"作者姓名"}</Tag></div>}
                                description={"文章标题ask觉得能内容啊实打实大苏打实打实啊实打实大苏打士大夫请问请问公司的股份三亚是否写作阿三打撒萨达萨达卡片你不雅这样贼看着我  我的脸上"}
                            />
                            <Meta
                                style={{ marginBottom: 20 }}
                                avatar={<Avatar src={require("../../../common/assets/imgs/avatar.png")} />}
                                title={<div><span>书籍名称</span><Tag color="#2db7f5" style={{ widows: 50, marginLeft: 20 }}>{"作者姓名"}</Tag></div>}
                                description={"文章标题ask觉得能内容写作开心就好天天开罗分厘卡大厦的卡片你不雅这样贼看着我  我的脸上"}
                            />
                        </Card>
                    </Col>
                    <Col span={7} className="gutter-row" style={{ background: "#00ff22" }}>
                        <Card bordered={false}>
                            <Meta
                                style={{ marginBottom: 20 }}
                                avatar={<Avatar src={require("../../../common/assets/imgs/avatar.png")} />}
                                title={<div><span>书籍名称</span><Tag color="#2db7f5" style={{ widows: 50, marginLeft: 20 }}>{"作者姓名"}</Tag></div>}
                                description={"文章标题ask觉得能内容写作开心就好天天开罗分厘卡大厦的卡片你不雅这样贼看着我  我的脸上"}
                            />
                            <Meta
                                style={{ marginBottom: 20 }}
                                avatar={<Avatar src={require("../../../common/assets/imgs/avatar.png")} />}
                                title={<div><span>书籍名称</span><Tag color="#2db7f5" style={{ widows: 50, marginLeft: 20 }}>{"作者姓名"}</Tag></div>}
                                description={"文章标题ask觉得能内容啊实打实大苏打实打实啊实打实大苏打士大夫请问请问公司的股份三亚是否写作阿三打撒萨达萨达卡片你不雅这样贼看着我  我的脸上"}
                            />
                            <Meta
                                style={{ marginBottom: 20 }}
                                avatar={<Avatar src={require("../../../common/assets/imgs/avatar.png")} />}
                                title={<div><span>书籍名称</span><Tag color="#2db7f5" style={{ widows: 50, marginLeft: 20 }}>{"作者姓名"}</Tag></div>}
                                description={"文章标题ask觉得能内容写作开心就好天天开罗分厘卡大厦的卡片你不雅这样贼看着我  我的脸上"}
                            />
                        </Card>
                    </Col>
                </Row>

            </div>
        )
    }
}
