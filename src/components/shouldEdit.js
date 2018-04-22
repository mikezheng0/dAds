import React from 'react'
import { connect } from 'react-redux'
import BuyModal from './modal'
import PlaceAd from './placeAd'
import styled from 'styled-components'

const TOP_AD_DESCRIPTION = 
  "Beat the current price to have your ad placed in the top ad spot. " +
  "Your ad will be replaced when the next buyer pays the next higher amount " +
  "to place their ad. If your ad gets replaced, all of your money will be " +
  "returned plus a 5% bonus. Every time an ad is placed the cost will rise by 10%."

const EDIT_AD_DESCRIPTION = 
  "Edit your ad here for free, just cover the cost of the transaction to the network."

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

const RenderEdit = ({ ad, currentUserAddress, price, placeAd, editAd, currentTopAdValue, isTopAdvertisement}) => {
  if(ad && ad.owner && currentUserAddress && ad.owner === currentUserAddress ) {
    return (
      <EditHoverButton buttonName="Edit This Ad" title="Edit your Ad" >
        <PlaceAd ad={ad} submitHandler={editAd} price={currentTopAdValue} submitText="Edit Ad" adDescription={EDIT_AD_DESCRIPTION}/>
      </EditHoverButton> 
    )
  } else if (isTopAdvertisement) {
    return (
      <HoverButton buttonName="Buy This Ad" title="Buy an Ad" >
        <PlaceAd submitHandler={placeAd} price={currentTopAdValue} submitText="Place Ad" adDescription={TOP_AD_DESCRIPTION}/>
      </HoverButton>
    )
  }
  return <div></div>
  
}

const mapStateToProps = ({currentUserAddress, currentTopAdValue}) => ({ currentUserAddress, currentTopAdValue })

export default connect(mapStateToProps)(RenderEdit)
