import { SETTEST } from '../constants/index'

export const setTest = (test) => {
    return (dispatch) => {
        dispatch({
            type: SETTEST,
            test: test
        })
    }
}

