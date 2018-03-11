import React, {Component} from "react"
import {connect} from "react-redux"
import {onChangeImgUrl, onChangeLinkUrl, onChangeTitle} from "../actions/adActions"

class PlaceAd extends Component {
  constructor(props){
    super(props)
  }


  render(){
    return  <div>
      <p>place ad:</p>
      img url<input onChange = {this.props.onChangeImgUrl}/>
      link url<input onChange = {this.props.onChangeLinkUrl}/>
      title<input onChange = {this.props.onChangeTitle}/>
      <button onClick={this.props.placeAd}>place ad</button>
    </div>
  }
}

const mapDispatchToProps = dispatch => {
  return {
  onChangeImgUrl: (event) => dispatch(onChangeImgUrl(event.target.value)),
  onChangeLinkUrl: (event) => dispatch(onChangeLinkUrl(event.target.value)),
  onChangeTitle: (event) => dispatch(onChangeTitle(event.target.value))
  }
}

export default connect(null,mapDispatchToProps)(PlaceAd)
