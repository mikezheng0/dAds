import React from "react"
import { Card, CardImage, HoverImageLink, HoverTitle } from "../styles"
import HoverButton from './modal'

const Advertisement = ({ ad, fullSize, handleClick }) => (
  <Card fullSize={fullSize}>
    <CardImage alt={ad.title} src={ad.imageUrl} />
    <HoverImageLink href={ad.linkUrl}>
      <HoverTitle>{ad.title}</HoverTitle>
      {handleClick && <HoverButton handleClick={handleClick} buttonName="Buy This Ad"></HoverButton>}
    </HoverImageLink>
  </Card>
)

export default Advertisement
