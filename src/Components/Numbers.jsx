import React from 'react'

export default function Numbers() {
  return (
    <div className='numbers'>
      {[1,2,3,4,5,6,7,8,9,0].map((num)=>{
        return(
          <button key={num} className="box" id={"box"+num}>{num}</button>
        )
      })}
    </div>
  )
}
