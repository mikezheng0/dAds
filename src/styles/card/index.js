import styled from 'styled-components'

const Card = styled.div`
    background: #fff;
    border-radius: 2px;
    display: inline-block;
    margin: 1rem;
    position: relative;
    width: 300px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`
const CardImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
`
export { Card, CardImage }