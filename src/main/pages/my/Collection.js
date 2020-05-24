import React from 'react'
import {Row,Col,Collapse} from 'antd'
import CollectionInfo from '../../../common/public/CollectionInfo'

const lastupdateddata = require('../../../common/data/lastUpdatedPic/lastUpdatedData')
const newbookdata=  require('../../../common/data/newBookPic/newBookData')

const { Panel } = Collapse;

export default class Collection extends React.Component{
    render(){        
        return(
            <Collapse>
                <Panel header="我的收藏" key = "collection">
                <Row  style={{backgroundColor:"#fff"}} justify="space-around">
                <Col>
                    {
                        lastupdateddata.map((book,index)=>{
                            
                            return(
                                index%5===0?
                                <CollectionInfo
                                    key = {index}
                                    avatarUrl={book.bookName}
                                    bookName={book.bookName}
                                    authorName={book.author}
                                    bookDescription={book.bookDescription}
                                    category={book.category}
                                    type={'lastUpdated'}
                                />:null
                            )
                        })
                    }
                </Col>
                <Col>
                    {
                        lastupdateddata.map((book,index)=>{
                            
                            return(
                                index%5===1?
                                <CollectionInfo
                                    key = {index}
                                    loading={false}
                                    avatarUrl={book.bookName}
                                    bookName={book.bookName}
                                    authorName={book.author}
                                    bookDescription={book.bookDescription}
                                    category={book.category}
                                    type={'lastUpdated'}
                                />:null
                            )
                        })
                    }
                </Col>
                <Col>
                    {
                        lastupdateddata.map((book,index)=>{
                            
                            return(
                                index%5===2?
                                <CollectionInfo
                                    key = {index}
                                    loading={false}
                                    avatarUrl={book.bookName}
                                    bookName={book.bookName}
                                    authorName={book.author}
                                    bookDescription={book.bookDescription}
                                    category={book.category}
                                    type={'lastUpdated'}
                                />:null
                            )
                        })
                    }
                </Col>
                <Col>
                    {
                        lastupdateddata.map((book,index)=>{
                            
                            return(
                                index%5===3?
                                <CollectionInfo
                                    key = {index}
                                    loading={false}
                                    avatarUrl={book.bookName}
                                    bookName={book.bookName}
                                    authorName={book.author}
                                    bookDescription={book.bookDescription}
                                    category={book.category}
                                    type={'lastUpdated'}
                                />:null
                            )
                        })
                    }
                </Col>
                <Col>
                    {
                        lastupdateddata.map((book,index)=>{
                            
                            return(
                                index%5===4?
                                <CollectionInfo
                                    key = {index}
                                    loading={false}
                                    avatarUrl={book.bookName}
                                    bookName={book.bookName}
                                    authorName={book.author}
                                    bookDescription={book.bookDescription}
                                    category={book.category}
                                    type={'lastUpdated'}
                                />:null
                            )
                        })
                    }
                </Col>
            </Row>
                </Panel>
                <Panel header="我看过的" key ="read">
                <Row  style={{backgroundColor:"#fff"}} justify="space-around">
                <Col>
                    {
                        newbookdata.map((book,index)=>{
                            
                            return(
                                index%5===0?
                                <CollectionInfo
                                    key = {index}
                                    avatarUrl={book.bookName}
                                    bookName={book.bookName}
                                    authorName={book.author}
                                    bookDescription={book.bookDescription}
                                    category={book.category}
                                    type={'newBook'}
                                />:null
                            )
                        })
                    }
                </Col>
                <Col>
                    {
                        newbookdata.map((book,index)=>{
                            
                            return(
                                index%5===1?
                                <CollectionInfo
                                    key = {index}
                                    loading={false}
                                    avatarUrl={book.bookName}
                                    bookName={book.bookName}
                                    authorName={book.author}
                                    bookDescription={book.bookDescription}
                                    category={book.category}
                                    type={'newBook'}
                                />:null
                            )
                        })
                    }
                </Col>
                <Col>
                    {
                        newbookdata.map((book,index)=>{
                            
                            return(
                                index%5===2?
                                <CollectionInfo
                                    key = {index}
                                    loading={false}
                                    avatarUrl={book.bookName}
                                    bookName={book.bookName}
                                    authorName={book.author}
                                    bookDescription={book.bookDescription}
                                    category={book.category}
                                    type={'newBook'}
                                />:null
                            )
                        })
                    }
                </Col>
                <Col>
                    {
                        newbookdata.map((book,index)=>{
                            
                            return(
                                index%5===3?
                                <CollectionInfo
                                    key = {index}
                                    loading={false}
                                    avatarUrl={book.bookName}
                                    bookName={book.bookName}
                                    authorName={book.author}
                                    bookDescription={book.bookDescription}
                                    category={book.category}
                                    type={'newBook'}
                                />:null
                            )
                        })
                    }
                </Col>
                <Col>
                    {
                        newbookdata.map((book,index)=>{
                            
                            return(
                                index%5===4?
                                <CollectionInfo
                                    key = {index}
                                    loading={false}
                                    avatarUrl={book.bookName}
                                    bookName={book.bookName}
                                    authorName={book.author}
                                    bookDescription={book.bookDescription}
                                    category={book.category}
                                    type={'newBook'}
                                />:null
                            )
                        })
                    }
                </Col>
                    </Row>
                </Panel>
            </Collapse>            

        )
    }
}