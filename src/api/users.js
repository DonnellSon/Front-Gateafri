import axios from "axios"

export const getUser = (userId) => {
    return axios({
        url: `${process.env.REACT_APP_API_DOMAIN}/api/users/${userId}`,
        method: 'get', withCredentials: true
    }).then((res) => res.data)
}