import axios from "axios"

export const getDiscussions = () => {
    return axios({
        url: `${process.env.REACT_APP_API_DOMAIN}/api/discussions`,
        method: 'get', withCredentials: true
    }).then((res) => res.data)
}

export const deleteDiscussion = (discuId) => {
    return axios({
        url: `${process.env.REACT_APP_API_DOMAIN}/api/discussions/${discuId}`,
        method: 'delete', withCredentials: true
    }).then((res) => res.data)
}

export const getCities = (keyword) => {
    
}