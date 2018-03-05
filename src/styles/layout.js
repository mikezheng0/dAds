import styled from 'styled-components'

const AdGrid = styled.div`
  display: flex;
  align-items: flex-start;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`

export {
  AdGrid
}