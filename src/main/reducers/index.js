import {SETTEST} from '../constants/index'

const INIT_STATE ={
    test:"test"
}

export default function setTest(state= INIT_STATE, action){
    switch(action.type){
        case SETTEST:
            return {
                ...state,
                test:action.test
            }
        default:
            return state
    }
}
