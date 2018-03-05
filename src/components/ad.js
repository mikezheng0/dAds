import React from "react"
import { Card, CardImage, HoverImageLink, HoverTitle } from "../styles"

const Advertisement = ({ ad, fullSize }) => (
  <Card fullSize={fullSize}>
    <CardImage alt={ad.title} src={ad.imageUrl} />
    <HoverImageLink href={ad.linkUrl}>
      <HoverTitle>{ad.title}</HoverTitle>
    </HoverImageLink>
  </Card>
)

export default Advertisement
