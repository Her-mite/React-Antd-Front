/**
 * 展示某一类书籍信息组件
 */
import React from "react"
import { Row, Col, } from "antd"
import '../../../common/assets/style.css'
import HotBookInfo from '../../../common/public/HotBookInfo'


/* 分两列展示书籍信息 */
export default class HotBook extends React.Component {
    static defaultProps = {
        bookdata: [],   //父组件传入参数，该类书籍信息
        type:''         //父组件传入参数，书籍类别
    }
    render() {
        return (
            <Row className="content-divide" justify="space-around">
                <Col span={12} className="gutter-row" style={{ background: "#998821" }}>
                    <div style={{ background: "#fff" }}>
                        {
                            this.props.bookdata.map((book, index) => {                                
                                if (index % 2 === 0) {
                                    return (
                                        <HotBookInfo
                                            key={index}
                                            loading={false}
                                            avatarUrl={book.bookname}
                                            bookName={book.bookname}
                                            authorName={book.author}
                                            bookDescription={book.description}
                                            category={book.category}
                                            type={this.props.type}
                                        />
                                    )
                                } else {
                                    return null
                                }
                            })
                        }

                    </div>
                </Col>
                <Col span={12} className="gutter-row" style={{ background: "#fff" }}>
                    {
                        this.props.bookdata.map((book, index) => {

                            if (index % 2 === 1) {
                                return (
                                    <HotBookInfo
                                        key={index}
                                        loading={false}
                                        avatarUrl={book.bookname}
                                        bookName={book.bookname}
                                        authorName={book.author}
                                        bookDescription={book.description}
                                        category={book.category}
                                        type={this.props.type}
                                    />
                                )
                            } else {
                                return null
                            }
                        })
                    }
                </Col>
             
            </Row>

        )
    }
}