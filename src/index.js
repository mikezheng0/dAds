import React from "react"
import { render } from "react-dom"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import store, { history } from "./store"
import { Provider } from "react-redux"
import { ConnectedRouter } from "react-router-redux"

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
