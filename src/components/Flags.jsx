import React from 'react'
import Flag from './Flag'
import { useCountriesContext } from '../context/CountriesContext'

function Flags() {
const {data} = useCountriesContext()
  return (
    <div className='flags'>        
        {data?data.map((flag,index) => (<Flag key={index} flagUrl={flag.flags.png}/>)):null}
    </div>
  )
}

export default Flags