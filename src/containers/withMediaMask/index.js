import React, { Component } from "react"
import Web3 from "web3"
import { connect } from "react-redux"
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../../constants/contract"
import { adFetchData, adsFetchData, resetAds } from "../../actions/adActions"

import { getCurrentValue } from "../../actions/currentValueActions"

export default WrappedComponent => {
  class WithMediaMask extends Component {
    constructor(props) {
      super(props)

      let web3 = window.web3
      if (typeof web3 !== "undefined") {
        new Web3(web3.currentProvider)
      } else {
        web3 = new Web3()
        web3.providers.HttpProvider(
          "https://rinkeby.infura.io/PctD67gJ9wNf9YzyDYHi"
        )
      }
      this.contract = web3.eth.contract(CONTRACT_ABI).at(CONTRACT_ADDRESS)
    }

    componentDidMount() {
      this.props.resetSideAds()
      this.props.getMainAd(0, this.contract)
      this.props.getSideAds([1, 2, 3], this.contract)
      this.props.getCurrentValue(this.contract)
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
      sideAds: state.ads,
      currentValue: state.currentValue,
      hasErrored: state.hasErrored,
      isLoading: state.isLoading
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      getMainAd: (id, contract) => dispatch(adFetchData(id, contract)),
      getSideAds: (ids, contract) => dispatch(adsFetchData(ids, contract)),
      getCurrentValue: contract => dispatch(getCurrentValue(contract)),
      resetSideAds: () => dispatch(resetAds())
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(WithMediaMask)
}
