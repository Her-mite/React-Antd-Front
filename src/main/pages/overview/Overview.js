import React from "react"
import { Carousel, Card, Row, Col, Avatar, Tag, Tabs, Button } from "antd"
import '../../../common/assets/style.css'
import BookInfo from '../../../common/public/BookInfo'
let bookdata = require('../../../common/data/bookdata')

const { TabPane } = Tabs

export default class Overview extends React.Component {
    // onChange = () => {
    //     console.log("1123");
    // }
    state = {
        test: true
    }
    render() {
        const { Meta } = Card
        return (
            <div style={{ background: "#fff" }}>
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
                            {
                                bookdata.map((book, index) => {
                                    console.log(book);
                                    console.log(index);

                                    if (index % 3 === 0) {
                                        return (
                                            <BookInfo
                                                loading={false}
                                                avatarUrl={book.bookName}
                                                bookName={book.bookName}
                                                authorName={book.author}
                                                bookDescription={book.bookDescription}
                                            />
                                        )
                                    }
                                })
                            }

                        </div>
                    </Col>
                    <Col span={7} className="gutter-row" style={{ background: "#513123" }}>
                        {
                            bookdata.map((book, index) => {
                                console.log(book);
                                console.log(index);

                                if (index % 3 === 1) {
                                    return (
                                        <BookInfo
                                            loading={false}
                                            avatarUrl={book.bookName}
                                            bookName={book.bookName}
                                            authorName={book.author}
                                            bookDescription={book.bookDescription}
                                        />
                                    )
                                }
                            })
                        }
                    </Col>
                    <Col span={7} className="gutter-row" style={{ background: "#00ff22" }}>
                        {
                            bookdata.map((book, index) => {
                                console.log(book);
                                console.log(index);

                                if (index % 3 === 2) {
                                    return (
                                        <BookInfo
                                            loading={false}
                                            avatarUrl={book.bookName}
                                            bookName={book.bookName}
                                            authorName={book.author}
                                            bookDescription={book.bookDescription}
                                        />
                                    )
                                }
                            })
                        }
                    </Col>
                </Row>

            </div>
        )
    }
}
