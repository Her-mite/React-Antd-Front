import React from "react"
import { Carousel, Row, Col, Tabs, } from "antd"
import '../../../common/assets/style.css'
import BookInfo from '../../../common/public/BookInfo'
let bookdata = require('../../../common/data/suspensePic/suspenseData')
const { TabPane } = Tabs

/* 分三列展示书籍信息 */
export default class BookType extends React.Component {
    render() {
        return (
            <Row className="content-divide" justify="space-around">
                <Col span={8} className="gutter-row" style={{ background: "#998821" }}>
                    <div style={{ background: "#fff" }}>
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
                                            category={book.category}
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
                                        category={book.category}
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
                                        category={book.category}
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