import { GET_USER_ADDRESS_SUCESS, SET_CONTRACT } from '../constants/ads'
import { CONTRACT_ADDRESS, CONTRACT_ABI, RINKEBY_ENDPOINT, RINKEBY_API_KEY } from "../constants/contract"
import { adFetchData, adsFetchData } from "./adActions"
import { getCurrentValue, getTopAdValue } from "./currentValueActions"

import Web3 from "web3"

export function getCurrentAddress(contract) {
  return dispatch => {
    const web3 = new Web3(window.web3.currentProvider)
    web3.eth.getAccounts()
      .then((data)=>{
        dispatch(getUserAddressSuccess(data[0]))
      })
  }
}

export function fetchContract() {
  return dispatch => {
    let web3 = window.web3
    if (typeof web3 !== "undefined") {
      web3 = new Web3(web3.currentProvider)
    } else {
      web3 = new Web3()
      web3.setProvider(new Web3.providers.HttpProvider(
        `${RINKEBY_ENDPOINT}/${RINKEBY_API_KEY}`
      ))
    }
    const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)
    dispatch(setContract(contract))
    dispatch(getCurrentAddress(contract))
    dispatch(adFetchData(0,contract))
    dispatch(adsFetchData([1,2,3],contract))
    dispatch(getTopAdValue(contract))
    dispatch(getCurrentValue(contract))

  }
}

export function getUserAddressSuccess(currentUserAddress) {
  return {
    type: GET_USER_ADDRESS_SUCESS,
    currentUserAddress
  }
}

export function setContract(contract){
  return {
    type: SET_CONTRACT,
    contract
  }
}