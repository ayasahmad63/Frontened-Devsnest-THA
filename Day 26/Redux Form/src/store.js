import {createStore} from "redux"
import {userFormReducer} from "./Redux/userForm/userFormReducer"


const store=createStore(userFormReducer)

export default store;