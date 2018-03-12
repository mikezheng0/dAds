import React from "react"
import { Card, CardImage, HoverImageLink, HoverTitle } from "../styles"
import BuyModal from './modal'
import PlaceAd from './placeAd'
import styled from 'styled-components'

const ImageSampler = styled.div`
  width:100%;
  height:300px;
  background-color:darkgrey;
  display:flex;
  justify-content:center;
  align-items: center;
  color: white;
  font-size: 35px;
  text-transform: uppercase;
  border-radius: 8px;
`

const RenderImages = ({title, imageUrl, missingMessage}) => {
  if (imageUrl) {
    return <CardImage alt={title} src={imageUrl} />
  }
  return <ImageSampler>
    {missingMessage}
  </ImageSampler>
} 

const Advertisement = ({ ad, fullSize, handleClick, placeAd, missingMessage}) => (
  <Card fullSize={fullSize}>
    { <RenderImages title={ad.title} imageUrl={ad.imageUrl} missingMessage={missingMessage}/> }
    <HoverImageLink href={ad.linkUrl}>
      <HoverTitle>{ad.title}</HoverTitle>
      { handleClick && 
        <BuyModal handleClick={handleClick} buttonName="Buy This Ad" title="Buy an Ad">
          <PlaceAd placeAd={placeAd}/>
        </BuyModal>
      }
    </HoverImageLink>
  </Card>
)

export default Advertisement
