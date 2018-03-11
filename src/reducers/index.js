import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import {
  ad,
  ads,
  adsHasErrored,
  adsIsLoading,
  imgurl,
  linkurl,
  title
} from "./adReducers"
import { currentValue, currentTopAdValue } from "./currentValueReducers"
export default combineReducers({
  routing: routerReducer,
  ad,
  ads,
  adsHasErrored,
  adsIsLoading,
  currentValue,
  currentTopAdValue,
  title,
  imgurl,
  linkurl
})
