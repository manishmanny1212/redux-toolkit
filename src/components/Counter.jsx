import React from 'react'
import Increment from './Increment'
import Decrement from './Decrement'
import Reset from './Reset'
import { useSelector } from 'react-redux'

function Counter() {
  const data =useSelector((state)=>{
    return  state.counter
})
  console.log(data)
  return (
    <div>
        <div>tour counter is {data}</div>
        <Increment/>
        <Decrement/>
        <Reset/>

    </div>
  )
}

export default Counter