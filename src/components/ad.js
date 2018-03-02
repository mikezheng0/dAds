import React from "react"

const Advertisement = ({ ad }) => (
  <div>
    <h1>{ad.title}</h1>
    <a href={ad.linkUrl}>
      <img style={{ maxWidth: 200 }} alt={ad.title} src={ad.imageUrl} />
    </a>
  </div>
)

export default Advertisement
