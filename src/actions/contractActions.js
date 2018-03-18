import { GET_USER_ADDRESS_SUCESS } from '../constants/ads'
import Web3 from "web3"

export function getCurrentAddress(ids, contract) {
  return dispatch => {
    const web3 = new Web3(window.web3.currentProvider)
    web3.eth.getAccounts()
      .then((data)=>{
        dispatch(getUserAddressSuccess(data[0]))
      })
  }
}

export function getUserAddressSuccess(currentUserAddress) {
  return {
    type: GET_USER_ADDRESS_SUCESS,
    currentUserAddress
  }
}