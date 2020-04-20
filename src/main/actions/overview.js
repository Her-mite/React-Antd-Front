import {SETTEST1} from '../constants/overview'

export const setTest1 = (test1) => {
    return (dispatch) =>{
        dispatch({
            type:SETTEST1,
            test1:test1
        })
    }
}
