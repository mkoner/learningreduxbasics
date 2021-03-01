import {combineReducers} from 'redux'
import cakeReducer from './cakes/cakeReducer'
import iceCreamReducer from './iceCreams/iceCreamsReducers'


const rootReducer= combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
export default rootReducer