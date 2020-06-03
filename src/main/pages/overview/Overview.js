import React from "react"
import { Carousel, Tabs, } from "antd"
import '../../../common/assets/style.css'
import BookType from './BookType'
import axios from 'axios'

const { TabPane } = Tabs

export default class Overview extends React.Component {

    state = {
        test: true,
        gameData:{}
    }
    componentDidMount= async()=>{
        const kehuanresponse = await axios.get('/api/book/queryBookinfo',{params:{booktable:'kehuanbook'}})
        const suspenseresponse = await axios.get('/api/book/queryBookinfo',{params:{booktable:'suspensebook'}})
        const historyresponse = await axios.get('/api/book/queryBookinfo',{params:{booktable:'historybook'}})
        const urbanresponse = await axios.get('/api/book/queryBookinfo',{params:{booktable:'urbanbook'}})
        const gameresponse = await axios.get('/api/book/queryBookinfo',{params:{booktable:'gamebook'}})
        
        this.setState({
            kehuanData:kehuanresponse.data.data,
            suspenseData:suspenseresponse.data.data,
            historyData:historyresponse.data.data,
            urbanData:urbanresponse.data.data,
            gameData: gameresponse.data.data
        })
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
                        <BookType bookdata={this.state.kehuanData} type ={'kehuan'} />
                    </TabPane>
                    <TabPane tab="悬疑" key="suspense" >
                        <BookType bookdata={this.state.suspenseData} type ={'suspense'} />
                    </TabPane>
                    <TabPane tab="历史" key="history" >
                        <BookType bookdata={this.state.historyData} type ={'history'} />
                    </TabPane>
                    <TabPane tab="都市" key="urban" >
                        <BookType bookdata={this.state.urbanData} type ={'urban'} />
                    </TabPane>
                    <TabPane tab="游戏" key="game" >
                        <BookType bookdata={this.state.gameData} type={'game'}/>
                    </TabPane>
                </Tabs>





            </div>
        )
    }
}
