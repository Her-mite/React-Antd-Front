import React from 'antd'

const menu =[
    {
        name:"标题一",
        icon:"appstore",
        key:"title1"
    },
    {
        name:"标题二",
        icon:"appstore",
        key:"title2",
        children:[
            {
                name:"标题二-1",
                icon:"appstore",
                key:"title2-1"
            },
            {
                name:"标题二-2",
                icon:"appstore",
                key:"title2-2"
            }
        ]
    },
    {
        name:"标题三",
        icon:"appstore",
        key:"title3",
        children:[
            {
                name:"标题三-1",
                icon:"appstore",
                key:"title3-1"
            },
            {
                name:"标题三-2",
                icon:"appstore",
                key:"title3-2"
            }
        ]
    }
]

export {menu}