import React, { Component } from "react"
import withMediaMask from "../withMediaMask"
import Advertisment from "../../components/ad"
import PlaceAd from "../../components/placeAd"
import { AdGrid } from '../../styles'
class Home extends Component {
  render() {
    return (
      <div>
        <Advertisment ad={this.props.mainAd} fullSize={true}/>
        <p>current value: {this.props.currentValue}</p>
        <AdGrid>
          {this.props.sideAds && this.props.sideAds.map((ad) => <Advertisment ad={ad} key={ad.id}/>)}
        </AdGrid>
        <p>current top ad value: {this.props.currentTopAdValue}</p>
        <PlaceAd placeAd={this.props.placeAd}></PlaceAd>
      </div>
    )
  }
}
export default withMediaMask(Home)
