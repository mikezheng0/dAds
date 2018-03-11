import styled from 'styled-components'

const AdGrid = styled.div`
  display: flex;
  align-items: flex-start;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`
const NavBar = styled.nav`
  display:flex;
  justify-content: space-between;
`

export {
  AdGrid,
  NavBar
}