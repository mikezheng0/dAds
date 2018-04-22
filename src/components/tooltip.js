import React, {Component} from 'react'
import styled from 'styled-components'
import {errorColor} from '../styles/constants/colors'

const TooltipContent = styled.div`

`
const TooltipStyle = styled.div`
  position: relative;

  & > ${TooltipContent} {
    position: absolute;
    right: 120px;
    background: ${errorColor};
    border-color: red;
    color: white;
    padding: 13px;
    border-radius: 10px;
    display: block;
    position: absolute;
    width: 410px;
    top:0;
  }
  & > ${TooltipContent}:before{
    content:'';
    display:block;
    width:0;
    height:0;
    position:absolute;

    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left:8px solid ${errorColor};
    right:-8px;

    top:14px;
}
`

export class Tooltip extends Component {
  render() {
    const { renderIf, content, children} = this.props
    if(!renderIf)
      return <TooltipStyle><TooltipContent>{content}</TooltipContent> {children}</TooltipStyle>
    else 
      return children
  }
}