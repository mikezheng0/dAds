import React, { Component } from "react"
import { utils } from 'web3'
import { connect } from 'react-redux'
import { AdGrid, RootBody } from '../../styles'
import withMediaMask from "../withMediaMask"
import Advertisment from "../../components/ad"
import PlaceAd from '../../components/placeAd'
import BuyModal from '../../components/modal'
import { createAd, placeTopAd, editAd } from '../../actions/adActions'

const AD_DESCRIPTION =
  "Beat the current price to have your ad placed on the Ethereum blockchain and displayed on our site. " +
  "Your ad will take the first spot of the three small ads. When the next person beats your price your ad " +
  "will be pushed to the second and then third spot. If your ad gets pushed out of the three small ad spots, " +
  "all of your money will be returned plus a 5% bonus. Every time an ad is placed the cost will rise by 10%."

class Home extends Component {
  constructor(props) {
    super(props)
    this.placeAd = this.placeAd.bind(this)
    this.editAd = this.editAd.bind(this)
    this.placeTopAd = this.placeTopAd.bind(this)
  }
  
  placeTopAd() {
    const { imgurl, linkurl, title, currentTopAdValue, currentUserAddress, contract } = this.props
    this.props.placeTopAd(imgurl, linkurl, title, currentTopAdValue, currentUserAddress, contract)
  }

  placeAd() {
    const { imgurl, linkurl, title, currentValue, currentUserAddress, contract } = this.props
    this.props.placeAd(imgurl, linkurl, title, currentValue, currentUserAddress, contract)
  }
  
  editAd() {
    const { id, imgurl, linkurl, title, currentUserAddress, contract } = this.props
    this.props.editAd(id, imgurl, linkurl, title, currentUserAddress, contract)
  }

  render() {
    const { mainAd, sideAds, currentValue, currentTopAdValue, isMetamaskInjected} = this.props
    return (
      <RootBody>
        <Advertisment ad={mainAd} isTopAdvertisement={true} placeAd={this.placeTopAd} editAd={this.editAd}/>
        <BuyModal  handleClick={this.handleClick} buttonName="Bid on This Set" title="Bid on this Set" >
          <PlaceAd submitHandler={this.placeAd} price={currentValue} submitText="Place Ad" adDescription={AD_DESCRIPTION}/>
        </BuyModal>
        <AdGrid>
          {sideAds && sideAds.map((ad) => <Advertisment ad={ad} key={ad.id} editAd={this.editAd}/>)}
        </AdGrid>
      </RootBody>
    )
  }
}

const mapStateToProps = ({ad, ads, id, currentValue, currentTopAdValue, imgurl, linkurl, title, currentUserAddress, contract, isMetamaskInjected}) => ({
  mainAd: ad,      
  sideAds: [...ads].sort((a, b) => a.id - b.id),
  id,
  currentValue,
  currentTopAdValue,
  currentUserAddress, 
  imgurl, 
  linkurl,
  title, 
  contract
})

const mapDispatchToProps = dispatch => ({
  placeAd: (imgurl, linkurl, title, currentPrice, address, contract) => dispatch(createAd(imgurl, linkurl, title, currentPrice, address, contract)),
  placeTopAd: (imgurl, linkurl, title, currentTopAdValue, address, contract) => dispatch(placeTopAd(imgurl, linkurl, title, currentTopAdValue, address, contract)),
  editAd: (id, imgurl, linkurl, title, address, contract) => dispatch(editAd(id, imgurl, linkurl, title, address, contract)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withMediaMask(Home))
