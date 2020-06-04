import React from 'react'
import { Row, Col, Collapse, } from 'antd'
import CollectionInfo from '../../../common/public/CollectionInfo'
import axios from 'axios'

const lastupdateddata = require('../../../common/data/lastUpdatedPic/lastUpdatedData')
const newbookdata = require('../../../common/data/newBookPic/newBookData')

const { Panel } = Collapse;

export default class Collection extends React.Component {
    click = async () => {
        console.log("there are something");
        try {
            let response = await axios.get('/api/book/test')
            console.log(response.data);

        } catch (error) {
            console.log(error);

        }

    }
    render() {
        let array = [0, 1, 2, 3, 4]  //作为分组依据   
        return (
            <Collapse>
                <Panel header="我的收藏" key="collection">
                    <Row style={{ backgroundColor: "#fff" }} justify="space-around">
                        {
                            array.map((value, index) => {
                                return (
                                    <Col key={index}>
                                        {
                                            lastupdateddata.map((book, index1) => {
                                                return (
                                                    index1 % 5 === array[value] ?
                                                        <CollectionInfo
                                                            key={index1}
                                                            avatarUrl={book.bookName}
                                                            bookName={book.bookName}
                                                            authorName={book.author}
                                                            bookDescription={book.bookDescription}
                                                            category={book.category}
                                                            hasRead={book.hasRead}
                                                            hasCollection={book.hasCollection}
                                                            type={'lastUpdated'}
                                                        /> : null
                                                )
                                            })
                                        }
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Panel>

                <Panel header="我看过的" key="read">
                    <Row style={{ backgroundColor: "#fff" }} justify="space-around">
                        {
                            array.map((value, index) => {
                                return (
                                    <Col key={index}>
                                        {
                                            newbookdata.map((book, index1) => {
                                                return (
                                                    index1 % 5 === array[value] ?
                                                        <CollectionInfo
                                                            key={index1}
                                                            avatarUrl={book.bookName}
                                                            bookName={book.bookName}
                                                            authorName={book.author}
                                                            bookDescription={book.bookDescription}
                                                            category={book.category}
                                                            type={'newBook'}
                                                        /> : null
                                                )
                                            })
                                        }
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Panel>
            </Collapse>

        )
    }
}