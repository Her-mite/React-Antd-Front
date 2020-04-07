import { SETTEST,SETSIDERCOLLAPSED,SETPANES,SETACTIVEKEY } from '../constants/index'

export const setTest = (test) => {
    return (dispatch) => {
        dispatch({
            type: SETTEST,
            test: test
        })
    }
}

export const setSiderCollapsed = (siderCollapsed)=>{
    return (dispatch) =>{
        dispatch({
            type:SETSIDERCOLLAPSED,
            siderCollapsed:siderCollapsed
        })
    }
}

export const setPanes = (panes)=>{
    return (dispatch) =>{
        dispatch({
            type:SETPANES,
            panes:panes
        })
    }
}

export const setActiveKey = (activeKey)=>{
    return (dispatch) =>{
        dispatch({
            type:SETACTIVEKEY,
            activeKey:activeKey
        })
    }
}
