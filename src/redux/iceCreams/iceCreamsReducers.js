import { BUY_ICECREAM } from './iceCreamsTypes'

const initialState ={
    numOfIceCream: 20
}

const iceCreamReducer = (state= initialState, action) => {
    switch(action.type){
        case BUY_ICECREAM : return {
            ...state,
            numOfIceCreams: state.numOfIceCream-1
        }
        default: return state
    }
}

export default iceCreamReducer;