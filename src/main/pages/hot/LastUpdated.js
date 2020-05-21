import React from 'react'
import HotBook from './HotBook'

let lastupdateddata = require('../../../common/data/lastUpdatedPic/lastUpdatedData')


export default class LastUpdated extends React.Component{
    render(){
        return(
            <HotBook bookdata ={lastupdateddata} type="lastUpdated"></HotBook>
            )
    }
}