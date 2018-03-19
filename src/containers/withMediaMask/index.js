import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchContract } from '../../actions/contractActions'
import { createAd } from '../../actions/adActions'

export default WrappedComponent => {
  class WithMediaMask extends Component {
    constructor(props) {
      super(props)
      this.props.fetchContract()
      this.placeAd = this.placeAd.bind( this)
      this.editAd = this.editAd.bind (this)
    }

    placeAd(){
      this.props.createNewAd(this.props.imgurl, this.props.linkurl, this.props.title, this.props.currentValue, this.address, this.contract)
    }

    editAd(){
      this.props.createNewAd(this.props.imgurl, this.props.linkurl, this.props.title, this.props.currentValue, this.address, this.contract)
    }

    render() {
      if (this.props.hasErrored) {
        return <p>Sorry! There was an error loading the items</p>
      }

      if (this.props.isLoading) {
        return <p>Loading…</p>
      }

      return <WrappedComponent {...this.props} placeAd={this.placeAd} editAd={this.editAd}/>
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
      contract: state.contract
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      fetchContract: () => dispatch(fetchContract()),
      createNewAd: (imgurl, linkurl, title, currentPrice, address, contract) => dispatch(createAd(imgurl, linkurl, title, currentPrice, address, contract)),
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(WithMediaMask)
}
