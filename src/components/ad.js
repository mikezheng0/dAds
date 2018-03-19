import React from "react"
import { Card, CardImage, HoverImageLink, HoverTitle } from "../styles"
import styled from 'styled-components'
import ShouldRenderEdit from './shouldEdit'

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
  return <ImageSampler>{missingMessage}</ImageSampler>
} 

const Advertisement = (props) => (
  <Card fullSize={props.isTopAdvertisement}>
    <RenderImages
      title={props.ad.title}
      imageUrl={props.ad.imageUrl}
      missingMessage={props.missingMessage}/>
      
    { !props.isSample && 
    <HoverImageLink href={props.ad.linkUrl}>
      <HoverTitle>{props.ad.title}</HoverTitle>
      <ShouldRenderEdit {...props}/>
    </HoverImageLink> }
  </Card>
)


export default Advertisement
