import {combineReducers} from 'redux'
import index from './main/reducers/index'
import overview from './main/reducers/overview'

const storeTree = combineReducers({
    index,
    overview
})

export default storeTree;