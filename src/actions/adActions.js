import {
  ADS_HAS_ERRORED,
  ADS_ARE_LOADING,
  AD_FETCH_DATA_SUCCESS,
  ADD_AD_FETCH_DATA_SUCCESS,
  RESET_AD_FETCH_DATA_SUCCESS
} from "../constants/ads"

export function adsHasErrored(bool) {
  return {
    type: ADS_HAS_ERRORED,
    hasErrored: bool
  }
}

export function adsIsLoading(bool) {
  return {
    type: ADS_ARE_LOADING,
    isLoading: bool
  }
}

export function adFetchDataSuccess(ad) {
  return {
    type: AD_FETCH_DATA_SUCCESS,
    ad
  }
}

export function addadFetchDataSuccess(ads) {
  return {
    type: ADD_AD_FETCH_DATA_SUCCESS,
    ads
  }
}

export function resetAds() {
  return {
    type: RESET_AD_FETCH_DATA_SUCCESS
  }
}

export function adFetchData(id, contract) {
  return dispatch => {
    dispatch(adsIsLoading(true))
    contract.methods.Ad(id).call()
      .then(result => {
        dispatch(adFetchDataSuccess(result))
      })
      .catch(error => {
        dispatch(adsHasErrored(true))
      })
  }
}

export function adsFetchData(ids, contract) {
  return dispatch => {
    dispatch(adsIsLoading(true))
    for(let id of ids)
    {
      contract.methods.Ad(id).call()
        .then(result => {
          result.id = id
          dispatch(addadFetchDataSuccess(result))
        })
        .catch(error => {
          dispatch(adsHasErrored(true))
        })
    }
  }
}
