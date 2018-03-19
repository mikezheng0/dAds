import React from 'react'
import { connect } from 'react-redux'
import BuyModal from './modal'
import PlaceAd from './placeAd'
import styled from 'styled-components'

const HoverButton = styled(BuyModal)`
  position: absolute;
  bottom: 8px;
  right: 8px;
`
const EditHoverButton = styled(BuyModal)`
  position: absolute;
  bottom: 8px;
  right: 8px;
`

const RenderEdit = ({ ad, currentUserAddress, price, placeAd, editAd, currentValue, isTopAdvertisement}) => {
  if(ad && ad.owner && currentUserAddress && ad.owner === currentUserAddress ) {
    return (
      <EditHoverButton buttonName="Edit This Ad" title="Edit your Ad" >
        <PlaceAd ad={ad} submitHandler={editAd} price={currentValue} submitText="Edit Ad"/>
      </EditHoverButton> 
    )
  } else if (isTopAdvertisement) {
    return (
      <HoverButton buttonName="Buy This Ad" title="Buy an Ad" >
        <PlaceAd submitHandler={placeAd} price={currentValue} submitText="Place Ad"/>
      </HoverButton>
    )
  }
  return <div></div>
  
}

const mapStateToProps = ({currentUserAddress, currentValue}) => ({ currentUserAddress, currentValue })

export default connect(mapStateToProps)(RenderEdit)
