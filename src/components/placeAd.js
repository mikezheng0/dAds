import React, {Component} from "react"
import {connect} from "react-redux"
import { onChangeImgUrl, onChangeLinkUrl, onChangeTitle } from "../actions/adActions"
import styled from 'styled-components'
import { Button } from '../styles/card'
import Advertisement from './ad'
import {utils} from 'web3'

const TextInput = styled.input`
  display:block;
  border: 1px grey solid;
  border-radius: 8px;
  padding: 10px 14px;
  min-width: 100%;
  font-size: 14px;
  margin-bottom: 10px;
  box-sizing: border-box;
`

const TextLabel = styled.label`
  margin-top:10px;
  display:block;
  font-size: 16px;
  color:#555;
`

const InteractionContainer = styled.div`
  display:flex;
  justify-content:flex-end;
`

class PlaceAd extends Component {

  render(){
    return  <div>
      Current Price is <b>{utils.fromWei(this.props.currentValue, 'ether')} ether</b>
      <TextLabel htmlFor="imageurl">Ad Image URL</TextLabel>
      <TextInput type="text" name="imageurl" id="imageurl" value={this.props.imgurl} onChange={this.props.onChangeImgUrl}/>
      <TextLabel htmlFor="linkUrl">Ad Link URL</TextLabel> 
      <TextInput type="text" name="linkUrl" id="linkUrl" value={this.props.linkurl} onChange={this.props.onChangeLinkUrl}/>
      <TextLabel htmlFor="title">Ad Title</TextLabel>
      <TextInput type="text" name="title" id="title" value={this.props.title} onChange={this.props.onChangeTitle}/>
      <InteractionContainer>
        <Button onClick={this.props.placeAd}>Place Ad</Button>
      </InteractionContainer>
      <Advertisement ad={{title:this.props.title, linkUrl:'#', imageUrl:this.props.imgurl}} fullSize={true} missingMessage="Sample Image"></Advertisement>
    </div>
  }
}

const mapStateToProps = ({imgurl, linkurl, title, currentValue}) => (
{
  currentValue,
  imgurl,
  linkurl,
  title
})

const mapDispatchToProps = dispatch => {
  return {
    onChangeImgUrl: (event) => dispatch(onChangeImgUrl(event.target.value)),
    onChangeLinkUrl: (event) => dispatch(onChangeLinkUrl(event.target.value)),
    onChangeTitle: (event) => dispatch(onChangeTitle(event.target.value))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PlaceAd)
