import { CURRENT_PRICE_SUCCESS, CURRENT_TOP_AD_VALUE_SUCCESS } from "../constants/currentValue"

export function currentValue(state = 0, action) {
  switch (action.type) {
    case CURRENT_PRICE_SUCCESS:
      return action.currentValue
    default:
      return state
  }
}

export function currentTopAdValue(state = 0, action) {
  switch (action.type) {
    case CURRENT_TOP_AD_VALUE_SUCCESS:
      return action.currentTopAdValue
    default:
      return state
  }
}