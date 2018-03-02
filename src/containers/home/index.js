import React, { Component } from "react"
import withMediaMask from "../withMediaMask"
import Advertisment from "../../components/ad"

class Home extends Component {
  render() {
    return (
      <div>
        <Advertisment ad={this.props.mainAd} />
        <p>current value: {this.props.currentValue}</p>
        {this.props.sideAds && this.props.sideAds.map((ad) => <Advertisment ad={ad} key={ad.id}/>)}
      </div>
    )
  }
}
export default withMediaMask(Home)
