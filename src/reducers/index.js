import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import { ad, ads, adsHasErrored, adsIsLoading } from "./adReducers"
import { currentValue, currentTopAdValue } from "./currentValueReducers"
export default combineReducers({
  routing: routerReducer,
  ad,
  ads,
  adsHasErrored,
  adsIsLoading,
  currentValue,
  currentTopAdValue
})
