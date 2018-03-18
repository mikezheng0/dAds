import { GET_USER_ADDRESS_SUCESS, SET_CONTRACT, GET_CONTRACT } from '../constants/ads'

export function currentUserAddress(state = false, action) {
  switch(action.type) {
    case GET_USER_ADDRESS_SUCESS:
      return action.currentUserAddress
    default:
      return state
  }
}

export function setContract(state = {}, action){
  switch (action.type) {
    case SET_CONTRACT:
      return action.contract
    default:
      return state
  }
}
