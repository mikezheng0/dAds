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
import { contract, isMetamaskInjected } from "./contractReducers"
import { currentValue, currentTopAdValue } from "./currentValueReducers"
import { currentUserAddress } from './contractReducers'
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
  linkurl,
  currentUserAddress,
  contract,
  isMetamaskInjected
})
