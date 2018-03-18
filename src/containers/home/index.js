import React, { Component } from "react"
import withMediaMask from "../withMediaMask"
import Advertisment from "../../components/ad"
import { AdGrid, RootBody } from '../../styles'
import { utils } from 'web3'
import PlaceAd from '../../components/placeAd'
import BuyModal from '../../components/modal'

class Home extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
  }
  
  render() {
    const { mainAd, placeAd, currentValue, sideAds, currentTopAdValue } = this.props
    return (
      <RootBody>
        <Advertisment ad={mainAd} fullSize={true} handleClick={this.handleClick} placeAd={placeAd}/>
        <p>current value: {currentValue && utils.fromWei( currentValue, 'ether' )}</p>
        <AdGrid>
          {sideAds && sideAds.map((ad) => <Advertisment ad={ad} key={ad.id}/>)}
        </AdGrid>
        <p>current top ad value: {currentTopAdValue && utils.fromWei( currentTopAdValue, 'ether' )}</p>
        <BuyModal  handleClick={this.handleClick} buttonName="Bid on This Set" title="Bid on this Set">
          <PlaceAd placeAd={currentTopAdValue} price={currentTopAdValue} submitText="Place Bid"/>
        </BuyModal>
      </RootBody>
    )
  }
}
export default withMediaMask(Home)
