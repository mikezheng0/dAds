import { GET_USER_ADDRESS_SUCESS, SET_CONTRACT, GET_CONTRACT } from '../constants/ads'
export function getCurrentAddress(ids, contract) {
  return dispatch => {
    
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