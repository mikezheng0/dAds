import {
  ADS_HAS_ERRORED,
  ADS_ARE_LOADING,
  AD_FETCH_DATA_SUCCESS,
  ADD_AD_FETCH_DATA_SUCCESS,
  RESET_AD_FETCH_DATA_SUCCESS,
  IMG_URL_CHANGED,
  LINK_URL_CHANGED,
  TITLE_CHANGED
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
    case RESET_AD_FETCH_DATA_SUCCESS:
      return []
    default:
      return state
  }
}

export function imgurl(state = "", action){
  switch (action.type) {
    case IMG_URL_CHANGED:
      return action.imgurl
    default:
      return state
  }
}
export function linkurl(state = "", action){
  switch (action.type) {
    case LINK_URL_CHANGED:
      return action.linkurl
    default:
      return state
  }
}
export function title(state = "", action){
  switch (action.type) {

    case TITLE_CHANGED:
      return action.title
    default:
      return state
  }
}
