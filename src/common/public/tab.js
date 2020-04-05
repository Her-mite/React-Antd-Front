import React from 'antd'

import Page1 from '../../main/pages/page1'
import Page2 from '../../main/pages/page2'

const menu =[
    {
        name:"标题一",
        icon:"icon-list",
        key:"title1"
    },
    {
        name:"标题二",
        icon:"icon-image",
        key:"title2",
        children:[
            {
                name:"标题二-1",
                icon:"icon-filter",
                key:"title2-1"
            },
            {
                name:"标题二-2",
                icon:"icon-filter",
                key:"title2-2"
            }
        ]
    },
    {
        name:"标题三",
        icon:"icon-recoird",
        key:"title3",
        children:[
            {
                name:"标题三-1",
                icon:"icon-balance",
                key:"title3-1"
            },
            {
                name:"标题三-2",
                icon:"icon-balance",
                key:"title3-2"
            }
        ]
    }
]



export {
    menu, 
    
}