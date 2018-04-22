import { GET_USER_ADDRESS_SUCESS, SET_CONTRACT, METAMASK_INJECTED_SUCCESS } from '../constants/ads'

export function currentUserAddress(state = "", action) {
  switch(action.type) {
    case GET_USER_ADDRESS_SUCESS:
      return action.currentUserAddress
    default:
      return state
  }
}

export function isMetamaskInjected(state = false, action) {
  switch(action.type) {
    case METAMASK_INJECTED_SUCCESS:
      return action.isInjected
    default:
      return state
  }
}

export function contract(state = null, action){
  switch (action.type) {
    case SET_CONTRACT:
      return action.contract
    default:
      return state
  }
}
