import { GET_USER_ADDRESS_SUCESS } from '../constants/ads'

export function currentUserAddress(state = "", action) {
  switch(action.type) {
    case GET_USER_ADDRESS_SUCESS:
      return action.currentUserAddress
    default:
      return state
  }
}