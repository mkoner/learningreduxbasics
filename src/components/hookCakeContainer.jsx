import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {buyCake} from '../redux'


const HookCakeContainer =()=>{
    const numOfCakes= useSelector( state => state.cake.numOfCakes)
    return (
        <div>
        <h2> Number of cakes: {numOfCakes} </h2>
        <button onClick= {useDispatch(()=>buyCake())}> Buy a cake </button>
    </div>
    )
}
export default HookCakeContainer;