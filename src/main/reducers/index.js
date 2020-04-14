import {SETTEST,SETSIDERCOLLAPSED,SETPANES, SETACTIVEKEY} from '../constants/index'
import { menu,} from '../../common/public/tab.js'

const INIT_STATE ={
    siderCollapsed:false,
    panes: [
        { 
            name: menu[0].name, 
            key: menu[0].key, 
            content: menu[0].content 
        },
    ],
    activeKey:menu[0].key,

    test:"test"
}

export default function setTest(state= INIT_STATE, action){
    switch(action.type){
        case SETTEST:
            return {
                ...state,
                test:action.test
            }
        case SETSIDERCOLLAPSED:
            return {
                ...state,
                siderCollapsed:!state.siderCollapsed
            }
        case SETPANES:
            return {
                ...state,
                panes:action.panes
            }
        case SETACTIVEKEY:
            return {
                ...state,
                activeKey:action.activeKey
            }
        default:
            return state
    }
}
