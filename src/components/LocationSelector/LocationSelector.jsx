import React from 'react'
import { MapContainer, TileLayer, Marker,useMapEvents } from 'react-leaflet';

function ClickableMap({onClick=()=>{}}) {
    const map = useMapEvents({
      click: (e) => {
        onClick(e)
      },
    })
    return null
  }

const LocationSelector = ({onSelect=()=>{}}) => {
    return (
        <div className='location-selector'>
            <MapContainer
                center={[51.505, -0.09]}
                zoom={13}
                scrollWheelZoom={false}
                className='map'

            >
                <ClickableMap onClick={(e)=>{
                    onSelect(e.latlng)
                }}/>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}></Marker>
            </MapContainer>
        </div>
    )
}

export default LocationSelector
