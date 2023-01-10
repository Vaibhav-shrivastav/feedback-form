import React from 'react'
import spinnerGif from '../../assets/Spinner.gif'

function Spinner() {
  return <img src={spinnerGif} alt='Loading...' style={{width:'100px'}} />
}

export default Spinner