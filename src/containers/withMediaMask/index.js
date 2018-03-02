import React, { Component } from "react"
import Web3 from "web3"
import { connect } from "react-redux"
import { CONTRACT_ADDRESS, CONTRACT_ABI, RINKEBY_ENDPOINT, RINKEBY_API_KEY } from "../../constants/contract"
import { adFetchData, adsFetchData, resetAds } from "../../actions/adActions"

import { getCurrentValue, getTopAdValue } from "../../actions/currentValueActions"

export default WrappedComponent => {
  class WithMediaMask extends Component {
    constructor(props) {
      super(props)

      let web3 = window.web3
      if (typeof web3 !== "undefined") {
        web3 = new Web3(web3.currentProvider)
      } else {
        web3 = new Web3()
        web3.setProvider(new Web3.providers.HttpProvider(
          `${RINKEBY_ENDPOINT}/${RINKEBY_API_KEY}`
        ))
      }
      this.contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)
    }

    componentDidMount() {
      this.props.resetSideAds()
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

      return <WrappedComponent {...this.props} />
    }
  }
  const mapStateToProps = state => {
    return {
      mainAd: state.ad,
      sideAds: [...state.ads].sort((a, b) => a.id - b.id),
      currentValue: state.currentValue,
      currentTopAdValue: state.currentTopAdValue,
      hasErrored: state.hasErrored,
      isLoading: state.isLoading
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      getMainAd: (id, contract) => dispatch(adFetchData(id, contract)),
      getSideAds: (ids, contract) => dispatch(adsFetchData(ids, contract)),
      getCurrentValue: contract => dispatch(getCurrentValue(contract)),
      getTopAdValue: contract => dispatch(getTopAdValue(contract)),
      resetSideAds: () => dispatch(resetAds())
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(WithMediaMask)
}
