import {useDispatch, useSelector } from "react-redux"
import { removeItem } from "../actions"

const ListTodo=()=>{
     const dispatch = useDispatch()
    const todos=useSelector((state)=>state.todo)
    return (
    <div>
        {todos.map((todo,index)=>(
     <div key={index}> <h4>{todo.title}</h4>
     <button onClick={()=>{
         dispatch(removeItem(index));
     }}>Delete</button>
     </ div>
        ))}
      
    </div>
    )
}
export default ListTodo