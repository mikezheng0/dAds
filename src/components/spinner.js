import React from 'react'
import styled, {keyframes} from 'styled-components'

const FoldCubeAngleKeyframe = keyframes`
  0%, 10% {
            transform: perspective(140px) rotateX(-180deg);
    opacity: 0; 
  } 25%, 75% {
            transform: perspective(140px) rotateX(0deg);
    opacity: 1; 
  } 90%, 100% {
            transform: perspective(140px) rotateY(180deg);
    opacity: 0; 
  } 
`;

const CubeContainer = styled.div`
  margin: 50px auto;
  width: 60px;
  height: 60px;
  position: relative;
  transform: rotateZ(45deg);
`

const CubeBase = styled.div`
float: left;
width: 50%;
height: 50%;
position: relative;
transform: scale(1.1); 
&:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #333;
  animation: ${FoldCubeAngleKeyframe} 2.4s infinite linear both;
  transform-origin: 100% 100%;
}
`
const Cube2 = CubeBase.extend`
transform: scale(1.1) rotateZ(90deg);
&:before {
  animation-delay: 0.3s;
}`

const Cube3 = CubeBase.extend`
transform: scale(1.1) rotateZ(180deg);
&:before {
  animation-delay: 0.6s; 
}
`
const Cube4 = CubeBase.extend`
transform: scale(1.1) rotateZ(270deg);
&:before {
  animation-delay: 0.9s;
}`
export default () => (
<CubeContainer>
  <CubeBase/>
  <Cube2/>
  <Cube3/>
  <Cube4/>
</CubeContainer>
)