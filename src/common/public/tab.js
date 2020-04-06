import React from "react"

import Page1 from '../../main/pages/part1/page1'
import Page2 from '../../main/pages/part2/page2'
import Page21 from '../../main/pages/part2/page21'
import Page3 from '../../main/pages/part3/page3'
import Page31 from '../../main/pages/part3/page31'

const menu =[
    {
        name:"标题一",
        icon:"icon-list",
        key:"Page1"
    },
    {
        name:"标题二",
        icon:"icon-image",
        key:"title2",
        children:[
            {
                name:"标题二-1",
                icon:"icon-filter",
                key:"Page2"
            },
            {
                name:"标题二-2",
                icon:"icon-filter",
                key:"Page21"
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
                key:"Page3"
            },
            {
                name:"标题三-2",
                icon:"icon-balance",
                key:"Page31"
            }
        ]
    }
]

const tabs = {
    Page1:<Page1 />,
    Page2:<Page2 />,
    Page21:<Page21 />,
    Page3:<Page3 />,
    Page31:<Page31 />
}



export {
    menu, 
    tabs
}