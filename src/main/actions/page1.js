import {SETTEST1} from '../constants/page1'

export const setTest1 = (test1) => {
    return (dispatch) =>{
        dispatch({
            type:SETTEST1,
            test1:test1
        })
    }
}
