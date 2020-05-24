import React from "react"

import Overview from '../../main/pages/overview/Overview'
import TopWorks from '../../main/pages/hot/TopWorks'
import LastUpdated from '../../main/pages/hot/LastUpdated'
import Collection from '../../main/pages/my/Collection'

const menu =[
    {
        name:"总览",
        icon:"icon-list",
        key:"overview"
    },
    {
        name:"最近热门",
        icon:"icon-image",
        key:"recent-hot",
        children:[
            {
                name:"热门作品",
                icon:"icon-filter",
                key:"TopWorks"
            },
            {
                name:"最近更新",
                icon:"icon-filter",
                key:"LastUpdated"
            }
        ]
    },
    {
        name:"收藏",
        icon:"icon-balance",
        key:"Collection",
    }
]

const tabs = {
    overview:<Overview />,
    TopWorks:<TopWorks />,
    LastUpdated:<LastUpdated />,
    Collection:<Collection />,
}



export {
    menu, 
    tabs
}