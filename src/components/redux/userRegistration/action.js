import * as actionTypes from './actionTypes';


export const addUser = (userInfo)=>{
    return {
        type:actionTypes.ADDUSER, 
        payload: userInfo
    }
}
export const deleteUser = (userId)=>{
    return {
        type:actionTypes.DELETEUSER, 
        payload: userId
    }
}
export const updateUser = (userInfo)=>{
    return {
        type:actionTypes.UPDATEUSER, 
        payload: userInfo
    }
}
export const singleUser = (userId)=>{
    return {
        type:actionTypes.SINGLEUSER, 
        payload: userId
    }
}