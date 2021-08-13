import {updateFirstName,updateLastName} from './userFormActiontype'



export const updateFirstNameInput=(input)=>{
    return {
        type:updateFirstName,
        payLoad:input,
    }
}
export const updateLasttNameInput=(input)=>{
    return {
        type:updateLastName,
        payLoad:input,
    }
}