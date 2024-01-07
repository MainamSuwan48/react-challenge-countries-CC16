import React from 'react'
import Flag from './Flag'
import { useCountriesContext } from '../context/CountriesContext'

function Flags() {
const {data} = useCountriesContext()
  return (
    <div className='flags'>
        <Flag/>
        {data?data.map((flag,index) => (<p key={index}>{flag.name.common}</p>)):null}
    </div>
  )
}

export default Flags