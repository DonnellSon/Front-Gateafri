import axios from "axios"

export const addPostNotification = (post) => {
    return axios({
        url: `${process.env.REACT_APP_API_DOMAIN}/post_notifications`,
        data: {post},
        method: 'post', withCredentials: true
    })
}