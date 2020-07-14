import React from 'react'
import { Button} from 'antd'

export default class Collection extends React.Component {

    componentDidMount=async()=>{

        let search = this.props.history.location.search
        search = JSON.parse(decodeURI(search.substr(1, search.length)))
        console.log(search)
        alert(search)
    }


    render() {
        return (
            <Button>hello world</Button>

        )
    }
}