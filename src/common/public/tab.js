import React from "react"

import Overview from '../../main/pages/overview/Overview'
import TopWorks from '../../main/pages/hot/TopWorks'
import LastUpdated from '../../main/pages/hot/LastUpdated'
import Collection from '../../main/pages/my/Collection'
import AlreadyRead from '../../main/pages/my/AlreadyRead'

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
        name:"我的",
        icon:"icon-recoird",
        key:"my",
        children:[
            {
                name:"收藏",
                icon:"icon-balance",
                key:"Collection"
            },
            {
                name:"我看过的",
                icon:"icon-balance",
                key:"AlreadyRead"
            }
        ]
    }
]

const tabs = {
    overview:<Overview />,
    TopWorks:<TopWorks />,
    LastUpdated:<LastUpdated />,
    Collection:<Collection />,
    AlreadyRead:<AlreadyRead />
}



export {
    menu, 
    tabs
}