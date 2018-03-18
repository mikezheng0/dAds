import { GET_USER_ADDRESS_SUCESS } from '../constants/ads'
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