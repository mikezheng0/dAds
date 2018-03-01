import {
  ADS_HAS_ERRORED,
  ADS_ARE_LOADING,
  AD_FETCH_DATA_SUCCESS,
  ADD_AD_FETCH_DATA_SUCCESS
} from '../constants/ads'

export function adsHasErrored(state = false, action) {
  switch(action.type) {
    case ADS_HAS_ERRORED:
      return action.hasErrored
    default:
      return state
  }
}

export function adsIsLoading (state=false, action) {
  switch (action.type) {
    case ADS_ARE_LOADING: 
      return action.isLoading
    default:
      return state
  }
}

export function ad(state = [], action){
  switch (action.type) {
    case AD_FETCH_DATA_SUCCESS:
      return action.ad
    default:
      return state
  }
}

export function ads(state = [], action){
  switch (action.type) {
    case ADD_AD_FETCH_DATA_SUCCESS:
      return [...state, action.ads]
    default:
      return state
  }
}