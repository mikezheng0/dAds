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
    callAdContract(id, contract)
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
    ids.forEach(id => {
      callAdContract(id, contract)
        .then(result => {
          dispatch(addadFetchDataSuccess(result))
        })
        .catch(error => {
          dispatch(adsHasErrored(true))
        })
    })
  }
}

function callAdContract(id, contract) {
  return new Promise((resolve, reject) => {
    contract.Ad.call(id, function(error, result) {
      if (error) {
        reject(error)
      } else {
        resolve(result)
      }
    })
  })
}
