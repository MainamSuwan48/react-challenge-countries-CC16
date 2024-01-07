import React from 'react'
import { useCountriesContext } from '../context/CountriesContext'

function Flag({flagUrl}) {
  const {data} = useCountriesContext()
  return (
    <div className='flag'>
      <img src={flagUrl}></img>
    </div>
  )
}

export default Flag