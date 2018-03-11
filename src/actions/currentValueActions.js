import { CURRENT_PRICE_SUCCESS, CURRENT_TOP_AD_VALUE_SUCCESS } from "../constants/currentValue"
import Web3 from 'web3'

const web3 = new Web3()

export function currentPriceSuccess(currentValue) {
  return {
    type: CURRENT_PRICE_SUCCESS,
    currentValue
  }
}

export function getTopAdPriceSuccess(currentTopAdValue) {
  return {
    type: CURRENT_TOP_AD_VALUE_SUCCESS,
    currentTopAdValue
  }
}

export function getCurrentValue(contract) {
  return dispatch => {
    contract.methods.currentPrice().call()
      .then(result => {
        dispatch(currentPriceSuccess(result))
      })
      .catch(error => {
        console.error(error)
      })
  }
}

export function getTopAdValue(contract) {
  return dispatch => {
    contract.methods.topAdCurrentPrice().call()
      .then(result=>{
        dispatch(getTopAdPriceSuccess(web3.utils.fromWei(result, 'ether')))
      })
      .catch(error => {
        console.error(error)
      })
  }
}