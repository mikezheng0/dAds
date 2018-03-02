import { CURRENT_PRICE_SUCCESS } from "../constants/currentValue"

export function currentPriceSuccess(currentValue) {
  return {
    type: CURRENT_PRICE_SUCCESS,
    currentValue
  }
}

export function getCurrentValue(contract) {
  return dispatch => {
    contract.methods.currentPrice().call()
      .then(result => {
        dispatch(currentPriceSuccess(result.toString()))
      })
      .catch(error => {
        console.log(error)
      })
  }
}
