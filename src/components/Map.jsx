import React from 'react'
import mapTest from '../assets/map-test.png'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'



function Map() {
  return (
    <div className='map'>
        <img src={mapTest}/>
    </div>
  )
}

export default Map