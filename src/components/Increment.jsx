import React from 'react'
import { useDispatch } from 'react-redux'
import  {Increments} from '../store/slices/counterSlice'


function Increment() {
  const dispatch=useDispatch()
  const Increment=()=>{
    dispatch(Increments())
  }
  return (
    <div> 
        <button onClick={()=>{Increment()}}>Increment</button>
    </div>
  )
}

export default Increment