import axios from 'axios';

export const getHotelDetails = (hotelId) => {
    return axios({
        url: `${process.env.REACT_APP_API_DOMAIN}/hotels/${hotelId}`,
        method: 'get', withCredentials: true,
        header: {
            'Content-Type': 'application/ld+json',
            'Accept': 'application/ld+json'
        }
    }).then((res) => res.data)
}

export const getHotelEquipments = (hotelId=null) => {
    if(!hotelId){
        return axios({
            url: `${process.env.REACT_APP_API_DOMAIN}/equipments`,
            method: 'get', withCredentials: true,
            header: {
                'Content-Type': 'application/ld+json',
                'Accept': 'application/ld+json'
            }
        }).then((res) => res.data)
    }

    return axios({
        url: `${process.env.REACT_APP_API_DOMAIN}/hotels/${hotelId}/equipments`,
        method: 'get', withCredentials: true,
        header: {
            'Content-Type': 'application/ld+json',
            'Accept': 'application/ld+json'
        }
    }).then((res) => res.data)
}

export const getHotelServices=()=>{
    return axios({
        url: `${process.env.REACT_APP_API_DOMAIN}/service_hotels`,
        method: 'get', withCredentials: true,
        header: {
            'Content-Type': 'application/ld+json',
            'Accept': 'application/ld+json'
        }
    }).then((res) => res.data)
}