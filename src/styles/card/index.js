import styled from 'styled-components'
import {hoverColor} from '../constants/colors'
const Card = styled.div `
    background: #fff;
    border-radius: 10px;
    position: relative;
    width: ${props => props.fullSize ? 'auto' : '33%'};
    display: flex;
    flex-direction: column; 
    align-items: center;
    padding: 8px 8px 40px 8px;
    @media (max-width: 700px) {
      width: auto;
    }
    
`

const HoverImageLink = styled.a `
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    &:hover {
      transition: all 250ms ease-in-out;
      background: linear-gradient(rgba(0,0,0,0.06) 0%,rgba(0,0,0,0.1) 60%,rgba(0, 0, 0, 0.15) 100%)
    }
`

const CardImage = styled.img `
    max-width: 100%;
    border-radius: 10px;
    max-height: 100%;
    overflow: hidden;
    z-index: 1;
    ${HoverImageLink}:hover ~ & {
      filter: blur(1px);
    }
`


const HoverTitle = styled.span `
    visibility: hidden;
    font-size:20px;
    position:absolute;
    bottom: 8px;
    left: 8px;
    text-decoration: none;
    color: white;
    font-family: "Segoe UI";
    ${HoverImageLink}:hover & {
      visibility: visible;
    }
`

const HoverButton = styled.button `
    font-size:20px;
    position:absolute;
    bottom: 8px;
    right: 8px;
    text-decoration: none;
    background: none;
    border:0;
    color: black;
    padding: 10px;
    opacity: 0.4;

    &:hover {
      background-color: ${hoverColor};
      border-radius: 16px;
    }
`

export {
  Card,
  CardImage,
  HoverImageLink,
  HoverTitle,
  HoverButton
}