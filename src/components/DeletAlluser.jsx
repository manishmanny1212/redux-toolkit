import React from 'react'
import { useDispatch } from 'react-redux'
import { removeAllUser } from '../store/slices/userslice'

function DeletAlluser() {
  const dispatch =useDispatch()
   const removeAlluser=()=>{
    console.log("remove all user")
    dispatch(removeAllUser())
   }

  return (
    <div>
        <button onClick={()=>removeAlluser()}>delete all user</button>
    </div>
  )
}

export default DeletAlluser