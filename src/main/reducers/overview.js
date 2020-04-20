import {SETTEST1} from '../constants/overview'

const INIT_STATE ={
    test1:"page21"
}

export default function setPortList(state= INIT_STATE, action){
    switch(action.type){
        case SETTEST1:
            return {
                ...state,
                test:action.test1
            }
        default:
            return state
    }
}
