import React, { Component } from "react"
import withMediaMask from "../withMediaMask"
import Advertisment from "../../components/ad"

class Home extends Component {
  render() {
    return (
      <div>
        <Advertisment ad={this.props.mainAd} />
        {this.props.sideAds && this.props.sideAds.map(ad => <Advertisment ad={ad} />)}
      </div>
    )
  }
}
export default withMediaMask(Home)
