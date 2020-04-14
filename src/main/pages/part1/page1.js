import React from "react"
import {Button,Carousel} from "antd"
import '../../../common/assets/style.css'

export default class Page1 extends React.Component{
    onChange = ()=>{
        console.log("1123");
        
    }

    render(){
        return(
            <div>
                <Carousel afterChange={this.onChange} autoplay dots={false}>
                    <div><h3><img src={require('../../../common/assets/imgs/img1.png')} alt="logo" /></h3></div>
                    <div><h3><img src={require('../../../common/assets/imgs/img2.png')} alt="logo" /></h3></div>
                    <div><h3><img src={require('../../../common/assets/imgs/img3.png')} alt="logo" /></h3></div>
                </Carousel>
            </div>
        )
    }
} 
