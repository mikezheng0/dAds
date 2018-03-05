import styled from 'styled-components'

const Card = styled.div`
    background: #fff;
    border-radius: 10px;
    position: relative;
    width: ${props => props.fullSize ? '100%' : '33%'};
    display: flex;
    flex-direction: column; 
    align-items: center;
    padding: 8px 8px 48px 8px;
    
`
const CardImage = styled.img`
    max-width: 100%;
    border-radius: 10px;
    max-height: 100%;
    overflow: hidden;
`

const HoverImageLink= styled.a`
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    &:hover {
      background-color:  rgba(13, 34, 68, 0.4);
    }

    &:hover > span {
      visibility: visible;
    }
`

const HoverTitle = styled.span`
  visibility: hidden;
  font-size:20px;
  position:absolute;
  bottom: 8px;
  left: 8px;
  text-decoration: none;
  color: white
  
`

export { Card, CardImage, HoverImageLink, HoverTitle }