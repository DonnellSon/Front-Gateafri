import { SET_USER } from "../constants";

const initialState = {
    user: null,
    userDomains: []
}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user:action.payload
            }
            break;

        default:
            return state
            break;
    }
}

export default userReducer