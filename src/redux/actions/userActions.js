import { SET_USER } from "../constants"

export const setConnectedUser = (user) => {
    return {
        type: SET_USER,
        payload:user
    }
}