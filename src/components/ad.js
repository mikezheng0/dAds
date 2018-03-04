import React from "react"
import { Card, CardImage } from "../styles"

const Advertisement = ({ ad }) => (
  <Card>
    <a href={ad.linkUrl}>
      <CardImage alt={ad.title} src={ad.imageUrl} />
    </a>
    <h2>{ad.title}</h2>
  </Card>
)

export default Advertisement
