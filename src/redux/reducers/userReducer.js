import { ADD_USER } from "../constants/constants.js";

const initialState = {
    users : []
}

export function userReducer(state = initialState, action) {
    if (action.type ===  ADD_USER){
        return {
            ... state,
            users: [
                ...state.users, 
                action.payload
            ]
        }
}else {
    return state;
    
}
}