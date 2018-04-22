import {
  ADS_HAS_ERRORED,
  ADS_ARE_LOADING,
  AD_FETCH_DATA_SUCCESS,
  ADD_AD_FETCH_DATA_SUCCESS,
  RESET_AD_FETCH_DATA_SUCCESS,
  IMG_URL_CHANGED,
  LINK_URL_CHANGED,
  TITLE_CHANGED,
  ID_SAVED,
  METAMASK_IS_LOADING
} from "../constants/ads"

import { fetchContract } from "./contractActions"
import { push } from "react-router-redux"
import  store  from "../store/index"

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
    dispatch(resetAds())
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

export function createAd(imageUrl, linkUrl, title, currentPrice, address, contract) {
  console.log(address)
  return dispatch => {
    dispatch(metamaskIsLoading(true))
    contract.methods.placeAd(imageUrl, linkUrl, title).send({from: address, value: currentPrice})
      .then(result => {
        console.log(result)
        dispatch(fetchContract())
        dispatch(push('/'));
      })
      .catch(error => {
        console.log(error)
        // do stuff
      })
      .finally(()=> dispatch(metamaskIsLoading(false)))
}
}

export function placeTopAd(imageUrl, linkUrl, title, currentPrice, address, contract) {
  console.log(address)
  return dispatch => {
    dispatch(metamaskIsLoading(true))
    contract.methods.placeTopAd(imageUrl, linkUrl, title).send({from: address, value: currentPrice})
    .then(result => {
      console.log(result)
      dispatch(fetchContract())
      dispatch(push('/'));
    })
    .catch(error => {
      console.log(error)
      // do stuff
    })
    .finally(()=> dispatch(metamaskIsLoading(false)))
}
}

export function editAd(id, imgurl, linkurl, title, address, contract) {
  console.log(address)
  return dispatch => {
    dispatch(metamaskIsLoading(true))
    contract.methods.modifyAd(id, imgurl, linkurl, title).send({from: address})
      .then(result => {
        console.log(result)
        dispatch(fetchContract())
        dispatch(push('/'));
      })
      .catch(error => {
        console.log(error)
        // do stuff
      })
      .finally(()=> dispatch(metamaskIsLoading(false)))
}
}

export function metamaskIsLoading(isLoading) {
  return {
    type: METAMASK_IS_LOADING, 
    isLoading
  }
}

export function onChangeImgUrl(imgurl){
  return {
    type: IMG_URL_CHANGED,
    imgurl
  }
}

export function onChangeLinkUrl(linkurl){
  return {
    type: LINK_URL_CHANGED,
    linkurl
  }
}

export function onChangeTitle(title){
  return {
    type: TITLE_CHANGED,
    title
  }
}

export function onSaveId(id){
  return {
    type: ID_SAVED,
    id
  }
}