import api from '../utils/api'

import {
  STRIPE_PUBKEY_LOADED,
  PAYMENT_INTENT_LOADED,
  USER_LOADED,
  AUTH_ERROR,
} from './types'

export const getStripePubKey = () => async dispatch => {
  const res = await api.get('/stripe/getStripePubKey')

  if (res.data.success) {
    dispatch({
      type: STRIPE_PUBKEY_LOADED,
      payload: res.data.stripePubKey
    })
  }
}

export const createPaymentIntent = formData => async dispatch => {
  const res = await api.post('/stripe/createPaymentIntent', formData)
  console.log("called createPaymentIntent", res.data)


  if (res.data.success) {
    dispatch({
      type: PAYMENT_INTENT_LOADED,
      payload: res.data.clientSecret
    })
  }
}

export const paid = (packageId, credits) => async dispatch => {
  console.log("packageId, credits=>", packageId, credits)

  try {
    const res = await api.post('/stripe/paid', { id: packageId, credits: credits })
    console.log(res.data)

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
}