import React from 'react'

export default function Card(props) {
  console.log(props);
  return (
    <div className="reportPage">
      <h1>REPORT ON DATA</h1>
      <div className='card'>
      <div className='card1'>
        <h5>TOTAL REPORTS</h5>
        <h4>NO : {props.count}</h4>
      </div>
      <div className='card2'>
      <h5>VALID REPORTS</h5>
        <h4>NO : {}</h4>
      </div>
      <div className='card3'>
      <h5>INVALID REPORTS</h5>
        <h4>NO : {}</h4>
      </div>
    </div>
    </div>
  )
}
