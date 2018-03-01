import React from "react"

const Advertisement = ({ ad }) => (
  <div >
    <h1>{ad[3]}</h1>
    <a href={ad[2]}>
      <img style={{maxWidth:200}} src={ad[1] } />
    </a>
  </div>
)

export default Advertisement
