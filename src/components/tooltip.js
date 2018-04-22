import React, {Component} from 'react'
import styled from 'styled-components'

const TooltipContent = styled.div`

`
const TooltipStyle = styled.div`
  position: relative;

  & > ${TooltipContent} {
    display: none;
    position: absolute;
    right: 120px;
    background: grey;
    color: white;
    padding: 13px;
    border-radius: 10px;
}
  }
  &:hover > ${TooltipContent} {
    display: block;
    position: absolute;
    width: 410px;
    top:0;
  }
  &:hover > ${TooltipContent}:before{
    content:'';
    display:block;
    width:0;
    height:0;
    position:absolute;

    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left:8px solid grey;
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