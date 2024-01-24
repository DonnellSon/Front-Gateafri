import { ADD_NOTIFICATION, SET_SOCKET, SET_USER, REMOVE_USER } from "../constants";

const initialState = {
    user: null,
    userDomains: [],
    userNotifications: [],
    socket: null
}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_USER:
            return {
                ...state,
                user: null
            };
        case SET_USER:
            return {
                ...state,
                user: {...action.payload}
            }
        
        
        default:
            return state
    }
}

export default userReducer