import React, { Component } from "react"
import { Route, Link } from "react-router-dom"
import { Home, About } from "./containers"
import styled from 'styled-components'
import { NavBar } from './styles'
import { hoverColor } from './styles/constants/colors'

const HeaderLink = styled(Link)`
  text-decoration: none;
  padding: 10px;
  border-radius: 16px;
  font-weight: 600;
  color: black;
  opacity: 0.4;
  &:hover {
    background-color: ${hoverColor};
  }
`
const NavRight = styled.div`
  display:flex;
`

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <NavBar>
            <div>logo</div>
            <NavRight>
              <HeaderLink to="/">Home</HeaderLink>
              <HeaderLink to="/about">About</HeaderLink>
            </NavRight>
          </NavBar>
        </header>
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </main>
      </div>
    )
  }
}

export default App
