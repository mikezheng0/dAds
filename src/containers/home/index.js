import React, { Component } from "react"
import { utils } from 'web3'
import { connect } from 'react-redux'
import { AdGrid, RootBody } from '../../styles'
import withMediaMask from "../withMediaMask"
import Advertisment from "../../components/ad"
import PlaceAd from '../../components/placeAd'
import BuyModal from '../../components/modal'
import { createAd } from '../../actions/adActions'

class Home extends Component {
  constructor(props) {
    super(props)
    this.placeAd = this.placeAd.bind(this)
    this.editAd = this.editAd.bind(this)
  }
  
  placeAd() {
    const { imgurl, linkurl, title, currentValue, currentUserAddress, contract } = this.props
    this.props.placeAd(imgurl, linkurl, title, currentValue, currentUserAddress, contract)
  }
  
  editAd() {
    const { imgurl, linkurl, title, currentValue, currentUserAddress, contract } = this.props
    this.props.editAd(imgurl, linkurl, title, currentValue, currentUserAddress, contract)
  }

  render() {
    const { mainAd, sideAds, currentValue, currentTopAdValue} = this.props
    return (
      <RootBody>
        <p>current value: {currentValue && utils.fromWei( currentValue, 'ether' )}</p>
        <Advertisment ad={mainAd} isTopAdvertisement={true} placeAd={this.placeAd} editAd={this.editAd}/>
        <p>current top ad value: {currentTopAdValue && utils.fromWei( currentTopAdValue, 'ether' )}</p>
        <BuyModal  handleClick={this.handleClick} buttonName="Bid on This Set" title="Bid on this Set">
          <PlaceAd submitHandler={this.placeAd} price={currentTopAdValue} submitText="Place Bid"/>
        </BuyModal>
        <AdGrid>
          {sideAds && sideAds.map((ad) => <Advertisment ad={ad} key={ad.id} editAd={this.editAd}/>)}
        </AdGrid>
      </RootBody>
    )
  }
}

const mapStateToProps = ({ad, ads, currentValue, currentTopAdValue, imgurl, linkurl, title, currentUserAddress, contract}) => ({
  mainAd: ad,      
  sideAds: [...ads].sort((a, b) => a.id - b.id),
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
  editAd: (imgurl, linkurl, title, currentPrice, address, contract) => dispatch(createAd(imgurl, linkurl, title, currentPrice, address, contract)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withMediaMask(Home))
