import React, { Component } from "react"
import Web3 from "web3"
import { connect } from "react-redux"
import { CONTRACT_ADDRESS, CONTRACT_ABI, RINKEBY_ENDPOINT, RINKEBY_API_KEY } from "../../constants/contract"
import { adFetchData, adsFetchData, resetAds, createAd } from "../../actions/adActions"
import { getCurrentAddress } from '../../actions/contractActions'
import { getCurrentValue, getTopAdValue } from "../../actions/currentValueActions"

export default WrappedComponent => {
  class WithMediaMask extends Component {
    constructor(props) {
      super(props)

      let web3 = window.web3
      if (typeof web3 !== "undefined") {
        web3 = new Web3(web3.currentProvider)
        web3.eth.getAccounts().then((data)=>{
          this.address = data[0]
        })
        .catch(function(error){
          console.log(error)
        })
      } else {
        web3 = new Web3()
        web3.setProvider(new Web3.providers.HttpProvider(
          `${RINKEBY_ENDPOINT}/${RINKEBY_API_KEY}`
        ))
      }
      this.contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)
      this.placeAd = this.placeAd.bind( this)
    }

    placeAd(){
      this.props.createNewAd(this.props.imgurl, this.props.linkurl, this.props.title, this.props.currentValue, this.address, this.contract)
    }

    componentDidMount() {
      this.props.resetSideAds()
      this.props.getCurrentAddress(this.contract)
      this.props.getMainAd(0, this.contract)
      this.props.getSideAds([1, 2, 3], this.contract)
      this.props.getCurrentValue(this.contract)
      this.props.getTopAdValue(this.contract)
    }

    render() {
      if (this.props.hasErrored) {
        return <p>Sorry! There was an error loading the items</p>
      }

      if (this.props.isLoading) {
        return <p>Loading…</p>
      }

      return <WrappedComponent {...this.props} placeAd={this.placeAd}/>
    }
  }
  const mapStateToProps = state => {
    return {
      mainAd: state.ad,
      sideAds: [...state.ads].sort((a, b) => a.id - b.id),
      currentValue: state.currentValue,
      currentTopAdValue: state.currentTopAdValue,
      hasErrored: state.hasErrored,
      isLoading: state.isLoading,
      imgurl: state.imgurl,
      linkurl: state.linkurl,
      title: state.title
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      getMainAd: (id, contract) => dispatch(adFetchData(id, contract)),
      getSideAds: (ids, contract) => dispatch(adsFetchData(ids, contract)),
      getCurrentValue: contract => dispatch(getCurrentValue(contract)),
      getTopAdValue: contract => dispatch(getTopAdValue(contract)),
      resetSideAds: () => dispatch(resetAds()),
      getCurrentAddress: () => dispatch(getCurrentAddress(contract)),
      createNewAd: (imgurl, linkurl, title, currentPrice, address, contract) => dispatch(createAd(imgurl, linkurl, title, currentPrice, address, contract))
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(WithMediaMask)
}
