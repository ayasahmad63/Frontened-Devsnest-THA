import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { updateFirstNameInput, updateLasttNameInput } from '../Redux/userForm/userFormAction'


export const Form = () => {
  const FirstName = useSelector(state => state.firstName)
  const LastName= useSelector(state => state.lastName)
   

  const dispatch = useDispatch()
    return (
        <div>
            <h2>Redux Form</h2>
            <form action="">
              FirstName:  <input type="text"
              onChange={(e)=> dispatch(updateFirstNameInput(e.target.value))} />
               LastName: <input type="text"
                 onChange={(e)=> dispatch( updateLasttNameInput(e.target.value))} />




            </form>
            <div>
      <h2>Show</h2>
      <p>FirstName:{FirstName}</p>
      <p>LastName:{LastName}</p>
    </div>
        </div>
    )
}
