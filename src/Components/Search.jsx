import React from 'react'

export default function Search(props) {
  return (
    <input type="text" className="search-bar" placeholder='Enter city name' onChange={(e)=>{
        props.setCity(e.target.value)
    }}/>
  )
}
