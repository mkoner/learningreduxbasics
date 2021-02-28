import {createStore} from 'redux'
import cakeReducer from './cakes/cakeReducercakes'

const store= createStore(cakeReducer)
export default store;