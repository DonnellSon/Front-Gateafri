import axios from "axios"

export const getComments = (commentableId,ipp=5) => {
    return axios({
        url: `${process.env.REACT_APP_API_DOMAIN}/commentable_entities/${commentableId}/comments?exists[parent]=false&&ipp=${ipp}`,
        method: 'get', withCredentials: true
    }).then((res) => res.data)
}
export const getCommentReplies = (commentId,ipp=5) => {
    return axios({
        url: `${process.env.REACT_APP_API_DOMAIN}/comments/${commentId}/replies?ipp=${ipp}`,
        method: 'get', withCredentials: true
    }).then((res) => res.data)
}