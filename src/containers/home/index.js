import React, { Component } from "react"
import withMediaMask from "../withMediaMask"
import Advertisment from "../../components/ad"
import { AdGrid, RootBody } from '../../styles'
import { utils } from 'web3'
import PlaceAd from '../../components/placeAd'
import BuyModal from '../../components/modal'

class Home extends Component {
  
  render() {
    const { mainAd, placeAd, editAd, currentValue, sideAds, currentTopAdValue } = this.props
    return (
      <RootBody>
        <p>current value: {currentValue && utils.fromWei( currentValue, 'ether' )}</p>
        <Advertisment ad={mainAd} isTopAdvertisement={true} placeAd={placeAd} editAd={editAd}/>
        <p>current top ad value: {currentTopAdValue && utils.fromWei( currentTopAdValue, 'ether' )}</p>
        <BuyModal  handleClick={this.handleClick} buttonName="Bid on This Set" title="Bid on this Set">
          <PlaceAd submitHandler={placeAd} price={currentTopAdValue} submitText="Place Bid"/>
        </BuyModal>
        <AdGrid>
          {sideAds && sideAds.map((ad) => <Advertisment ad={ad} key={ad.id} editAd={editAd}/>)}
        </AdGrid>
      </RootBody>
    )
  }
}
export default withMediaMask(Home)
