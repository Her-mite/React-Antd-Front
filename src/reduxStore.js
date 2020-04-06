import {combineReducers} from 'redux'
import index from './main/reducers/index'
import page1 from './main/reducers/page1'

const storeTree = combineReducers({
    index,
    page1
})

export default storeTree;