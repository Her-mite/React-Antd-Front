import React from "react"
import { Carousel, Tabs, } from "antd"
import '../../../common/assets/style.css'
import BookType from './BookType'

let kehuanData = require('../../../common/data/kehuanPic/kehuanData')
let suspenseData = require('../../../common/data/suspensePic/suspenseData')
let historyData = require('../../../common/data/historyPic/historyData')
let urbanData = require('../../../common/data/urbanPic/urbanData')
let gameData = require('../../../common/data/gamePic/gameData')

const { TabPane } = Tabs

export default class Overview extends React.Component {

    state = {
        test: true
    }
    render() {
        return (
            <div style={{ background: "#fff" }}>
                        <Carousel afterChange={this.onChange} autoplay dots={false}>
                            <div><h3><img src={require('../../../common/assets/imgs/img1.png')} alt="logo1" /></h3></div>
                            <div><h3><img src={require('../../../common/assets/imgs/img2.png')} alt="logo2" /></h3></div>
                            <div><h3><img src={require('../../../common/assets/imgs/img3.png')} alt="logo3 " /></h3></div>
                        </Carousel>
                {/* 导航选择栏，可选择不同类型书籍 */}
                <Tabs className='TableStyle' defaultActiveKey="literature">
                    <TabPane tab="科幻" key="fantasy" >
                        <BookType bookdata={kehuanData} type ={'kehuan'} />
                    </TabPane>
                    <TabPane tab="悬疑" key="suspense" >
                        <BookType bookdata={suspenseData} type ={'suspense'} />
                    </TabPane>
                    <TabPane tab="历史" key="history" >
                        <BookType bookdata={historyData} type ={'history'} />
                    </TabPane>
                    <TabPane tab="都市" key="urban" >
                        <BookType bookdata={urbanData} type ={'urban'} />
                    </TabPane>
                    <TabPane tab="游戏" key="game" >
                        <BookType bookdata={gameData} type={'game'}/>
                    </TabPane>
                </Tabs>





            </div>
        )
    }
}
