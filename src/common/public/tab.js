import React from "react"

import Overview from '../../main/pages/overview/Overview'
import Page2 from '../../main/pages/part2/page2'
import Page21 from '../../main/pages/part2/page21'
import Page3 from '../../main/pages/part3/page3'
import Page31 from '../../main/pages/part3/page31'

const menu = [
    {
        name: "总览",
        icon: "icon-list",
        key: "overview"
    },
    {
        name: "标题二",
        icon: "icon-image",
        key: "title2",
        children: [
            {
                name: "标题二-1",
                icon: "icon-filter",
                key: "Page2"
            },
            {
                name: "标题二-2",
                icon: "icon-filter",
                key: "Page21"
            }
        ]
    },
    {
        name: "标题三",
        icon: "icon-recoird",
        key: "title3",
        children: [
            {
                name: "标题三-1",
                icon: "icon-balance",
                key: "Page3"
            },
            {
                name: "标题三-2",
                icon: "icon-balance",
                key: "Page31"
            }
        ]
    }
]

const tabs = {
    overview: <Overview />,
    Page2: <Page2 />,
    Page21: <Page21 />,
    Page3: <Page3 />,
    Page31: <Page31 />
}



export {
    menu,
    tabs
}