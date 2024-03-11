import axios from "axios"

export const addContact=()=>{
        return axios({
            url: `${process.env.REACT_APP_API_DOMAIN}/api/contacts`,
            method: 'post', withCredentials: true
        }).then((res) => res.data)
}

export const existContact=(userId)=>{
    return axios({
        url: `${process.env.REACT_APP_API_DOMAIN}/api/contacts?or[receiver.id]=${userId}&or[requester.id]=${userId}`,
        method: 'get', withCredentials: true
    }).then((res) => res.data)
}

export const acceptContact=(contactId)=>{
    return axios({
        url: `${process.env.REACT_APP_API_DOMAIN}/api/contacts/${contactId}/accept`,
        method: 'post', withCredentials: true
    }).then((res) => res.data)
}