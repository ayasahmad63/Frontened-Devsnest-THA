
import { updateFirstName, updateLastName } from "./userFormActiontype"

const initialState = {
    firstName: "",
    lastName: ""
}

export const userFormReducer = (state = initialState, action) => {
   
    switch (action.type) {
        case updateFirstName:
            return {
                ...state,
                firstName:action.payLoad,
            }
        case updateLastName:
            return {
                ...state,
                lastName: action.payLoad,
            }
        default:
            return state
    }
}