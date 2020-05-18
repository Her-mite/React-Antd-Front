import React from "react"
import { Carousel, Row, Col, Tabs, } from "antd"
import '../../../common/assets/style.css'
import BookInfo from '../../../common/public/BookInfo'
import BookType from './BookType'

let bookdata = require('../../../common/data/suspensePic/suspenseData')

const { TabPane } = Tabs

export default class Overview extends React.Component {

    state = {
        test: true
    }
    render() {
        return (
            <div style={{ background: "#fff" }}>

                {/* 导航选择栏，可选择不同类型书籍 */}
                <Tabs className='TableStyle' defaultActiveKey="literature">
                    <TabPane tab="科幻" key="fantasy" >
                        <Carousel afterChange={this.onChange} autoplay dots={false}>
                            <div><h3><img src={require('../../../common/assets/imgs/img1.png')} alt="logo1" /></h3></div>
                            <div><h3><img src={require('../../../common/assets/imgs/img2.png')} alt="logo2" /></h3></div>
                            <div><h3><img src={require('../../../common/assets/imgs/img3.png')} alt="logo3 " /></h3></div>
                        </Carousel>
                        <BookType />
                    </TabPane>
                    <TabPane tab="悬疑" key="suspense" >
                    <Carousel afterChange={this.onChange} autoplay dots={false}>
                            <div><h3><img src={require('../../../common/assets/imgs/img1.png')} alt="logo1" /></h3></div>
                            <div><h3><img src={require('../../../common/assets/imgs/img2.png')} alt="logo2" /></h3></div>
                            <div><h3><img src={require('../../../common/assets/imgs/img3.png')} alt="logo3 " /></h3></div>
                        </Carousel>
                    </TabPane>
                    <TabPane tab="历史" key="history" />
                    <TabPane tab="文化" key="Culture" />
                    <TabPane tab="哲学" key="philosophy" />
                </Tabs>





            </div>
        )
    }
}
