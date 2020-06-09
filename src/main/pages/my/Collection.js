import React from 'react'
import { Row, Col, Collapse, message } from 'antd'
import CollectionInfo from '../../../common/public/CollectionInfo'
import axios from 'axios'

// const lastupdateddata = require('../../../common/data/lastUpdatedPic/lastUpdatedData')
// const newbookdata = require('../../../common/data/newBookPic/newBookData')

const { Panel } = Collapse;

export default class Collection extends React.Component {
    state={
        collectiondata:[],
        hasreaddata:[]
    }

    componentDidMount=async()=>{
        const responseCollection= await axios.get("/api/book/queryBookinfo", {params:{booktable:"collection"}})
        const responseHasRead= await axios.get("/api/book/queryBookinfo", {params:{booktable:"hasRead"}})
        if(responseCollection.data.code!==200||responseHasRead.data.code!==200){
            message.error("数据初始化出错")
            return
        }
        this.setState({
            collectiondata:responseCollection.data.data,
            hasreaddata:responseHasRead.data.data
        })

        console.log(responseCollection.data);
        console.log(responseHasRead.data);
    }

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
                                            this.state.collectiondata.map((book, index1) => {
                                                console.log(book.picturlUrl);
                                                
                                                return (
                                                    index1 % 5 === array[value] ?
                                                        <CollectionInfo
                                                            key={index1}
                                                            avatarUrl={book.pictureUrl}
                                                            bookName={book.bookname}
                                                            authorName={book.author}
                                                            bookDescription={book.description}
                                                            category={book.category}
                                                            // hasRead={book.hasRead}
                                                            // hasCollection={book.hasCollection}
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
                                            this.state.hasreaddata.map((book, index1) => {
                                                return (
                                                    index1 % 5 === array[value] ?
                                                        <CollectionInfo
                                                            key={index1}
                                                            avatarUrl={book.pictureUrl}
                                                            bookName={book.bookname}
                                                            authorName={book.author}
                                                            bookDescription={book.description}
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