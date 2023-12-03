import { ActionTypes } from "./action-types";

export const available = (item)=>{
    return {
        type:ActionTypes.AVAILABLE,
        payload:item
    }
}
export const missing = (item)=>{
    return {
        type:ActionTypes.MISSING,
        payload:item
    }
}
export const missingUrgent = (item)=>{
    return {
        type:ActionTypes.MISSING_URGENT,
        payload:item
    }
}
export const editData = (item)=>{
    return {
        type:ActionTypes.EDIT_DATA,
        payload:item
    }
}