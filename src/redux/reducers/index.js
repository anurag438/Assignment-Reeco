import {combineReducers} from 'redux'
import {ctaReducer} from './mainReducer'

const reducers = combineReducers({
    data:ctaReducer
})
export default reducers