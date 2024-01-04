import axios from "axios"

export const getCountryList = ({ ipp= 10, pg= 1,filters=null }) => {
    return axios({
        url: `${process.env.REACT_APP_API_DOMAIN}/api/pays?ipp=${ipp}&groups[]=country_list${filters ? '&'+filters : ''}`,
        method: 'get', withCredentials: true
    }).then((res) => res.data)
}
export const getCurrenciesList = ({ ipp= 10, pg= 1,filters=null }) => {
    return axios({
        url: `${process.env.REACT_APP_API_DOMAIN}/api/currencies?ipp=${ipp}${filters ? '&'+filters : ''}`,
        method: 'get', withCredentials: true
    }).then((res) => res.data)
}

export const getCitiesList=(keyword)=>{
    return axios({
        url: `${process.env.REACT_APP_API_DOMAIN}/api/cities?groups[]=cities_names${keyword ? `&name=${keyword}` : ''}`,
        method: 'get', withCredentials: true
    }).then((res) => res.data)
}
