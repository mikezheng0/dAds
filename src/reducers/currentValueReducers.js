import { CURRENT_PRICE_SUCCESS } from "../constants/currentValue"

export function currentValue(state = 0, action) {
  switch (action.type) {
    case CURRENT_PRICE_SUCCESS:
      return action.currentValue
    default:
      return state
  }
}