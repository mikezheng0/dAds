import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import { ad, adsHasErrored, adsIsLoading } from "../reducers/adReducers"
export default combineReducers({
  routing: routerReducer,
  ad,
  adsHasErrored,
  adsIsLoading
})
