import { BUY_CAKE } from './cakeTypes'

const intialState = {
    numOfCakes:10
}

const cakeReducer = (state=intialState, acton) => {
    switch(bindActionCreators.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes-1
        }
        default: return state
    }
}

export default cakeReducer