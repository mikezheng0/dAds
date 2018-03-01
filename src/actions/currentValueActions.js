import { CURRENT_PRICE_SUCCESS } from "../constants/currentValue"

export function currentPriceSuccess(currentValue) {
  return {
    type: CURRENT_PRICE_SUCCESS,
    currentValue
  }
}

export function getCurrentValue(contract) {
  return dispatch => {
    callCurrentValueContract(contract)
      .then(result => {
        dispatch(currentPriceSuccess(result.toString()))
      })
      .catch(error => {
        console.log(error)
      })
  }
}

function callCurrentValueContract(contract) {
  return new Promise((resolve, reject) => {
    contract.currentPrice.call(function(error, result) {
      if (error) {
        reject(error)
      } else {
        resolve(result)
      }
    })
  })
}
