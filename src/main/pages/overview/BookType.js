/**
 * 展示某一类书籍信息组件
 */
import React from "react"
import { Row, Col, } from "antd"
import '../../../common/assets/style.css'
import BookInfo from '../../../common/public/BookInfo'

/* 分三列展示书籍信息 */
export default class BookType extends React.Component {
    static defaultProps = {
        bookdata: [],   //父组件传入参数，该类书籍信息
        type:''         //父组件传入参数，书籍类别
       
    }
    render() {
        return (
            <Row className="content-divide" justify="space-around">
                <Col span={8} className="gutter-row" style={{ background: "#998821" }}>
                    <div style={{ background: "#fff" }}>
                        {
                            this.props.bookdata.map((book, index) => {

                                if (index % 3 === 0) {
                                    return (
                                        <BookInfo
                                            key ={index}
                                            loading={false}
                                            avatarUrl={book.bookName}
                                            bookName={book.bookName}
                                            authorName={book.author}
                                            bookDescription={book.bookDescription}
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
                <Col span={8} className="gutter-row" style={{ background: "#fff" }}>
                    {
                        this.props.bookdata.map((book, index) => {

                            if (index % 3 === 1) {
                                return (
                                    <BookInfo
                                        key={index}
                                        loading={false}
                                        avatarUrl={book.bookName}
                                        bookName={book.bookName}
                                        authorName={book.author}
                                        bookDescription={book.bookDescription}
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
                <Col span={8} className="gutter-row" style={{ background: "#fff" }}>
                    {
                        this.props.bookdata.map((book, index) => {

                            if (index % 3 === 2) {
                                return (
                                    <BookInfo
                                        key={index}
                                        loading={false}
                                        avatarUrl={book.bookName}
                                        bookName={book.bookName}
                                        authorName={book.author}
                                        bookDescription={book.bookDescription}
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