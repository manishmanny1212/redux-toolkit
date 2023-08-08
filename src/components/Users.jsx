import React from 'react'
import styled from 'styled-components';
import DeletAlluser from './DeletAlluser';
import { fackUserdata } from '../api';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/slices/userslice';
import DisplayUser from './DisplayUser';
const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
`;

function Users() {
  const usedispatch=useDispatch()
  const addnewUser =(payload)=>{
    console.log (payload)
    usedispatch(addUser(payload))
  }
  return (
    <div>
        <div><span>all user</span> <span><Button  onClick={()=>{addnewUser(fackUserdata())}}>Click Me</Button></span></div>
        <ul>
            <DisplayUser/>
        </ul>
        <DeletAlluser/>
    </div>
  )
}
console.log("hello user components")

export default Users