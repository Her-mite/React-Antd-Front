import React from "react"
import HotBook from './HotBook'

let topworksdata = require('../../../common/data/newBookPic/newBookData')

export default class TopWorks extends React.Component{
    render(){
        return(
            <HotBook bookdata ={topworksdata} type ="newBook"></HotBook>
        )
    }
}