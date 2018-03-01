import React, { Component } from "react"
import { Route, Link } from "react-router-dom"
import { Home, About } from "./containers"

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
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
