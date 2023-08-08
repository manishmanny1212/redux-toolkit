import React from 'react'
import { useSelector } from 'react-redux'
import { removeUser } from '../store/slices/userslice'
import { useDispatch } from 'react-redux'

function DisplayUser() {
    const data=useSelector((state)=>{
        return  state.user1
    })

    const dispatch =useDispatch()

    const deleteSingleUser =(user)=>{
        dispatch(removeUser(user))
    }



  return <div>
    {
        data.map((user, id)=>{
            return <div  key={id}>
                {user} <button onClick={()=>{
                    deleteSingleUser(user)
                }}>delete single user</button>
            </div>

        })
    }
  </div>
}


export default DisplayUser