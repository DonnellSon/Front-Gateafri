export const getImageEvaluations=(imageId)=>{
    return axios({
        url: `${process.env.REACT_APP_API_DOMAIN}/api/images/${imageId}/evaluations`,
        method: 'get', withCredentials: true,
    }).then((res) => res.data)
}