import React from "react"
import { connect } from "react-redux"
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js"

const CheckoutForm = ({ returnUrl }) => {
  const stripe = useStripe()
  const elements = useElements()

  const [message, setMessage] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    if (!stripe) {
      return
    }

    const clientSecret = new URLSearchParams(window.location.search).get("payment_intent_client_secret")

    if (!clientSecret) {
      return
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!")
          break
        case "processing":
          setMessage("Your payment is processing.")
          break
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.")
          break
        default:
          setMessage("Something went wrong.")
          break
      }
    })
  }, [stripe])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsLoading(true)

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: returnUrl,
      },
    })

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message)
    } else {
      setMessage("An unexpected error occured.")
    }

    setIsLoading(false)
  }

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <div className='row mx-1 my-3 py-3 bg-white mm-rounded-lg mm-shadow'>
        <div className='col-md-6'>
          <p><b className='mb-4'>Shipping Info</b></p>
          <div className='form-group'>
            <label className='form-label'>First Name</label>
            <input
              className='form-control'
              type='text'
              required
            />
          </div>
          <div className='form-group'>
            <label className='form-label'>Last Name</label>
            <input
              className='form-control'
              type='text'
            />
          </div>
          <div className='form-group'>
            <label className='form-label'>Phone Number</label>
            <input
              className='form-control'
              type='text'
            />
          </div>
          <div className='form-group'>
            <label className='form-label'>Email</label>
            <input
              className='form-control'
              type='text'
            />
          </div>
          <div className='form-group'>
            <label className='form-label'>Address</label>
            <input
              className='form-control'
              type='text'
            />
          </div>
          <div className='form-group'>
            <label className='form-label'>City</label>
            <input
              className='form-control'
              type='text'
            />
          </div>
          <div className='form-group'>
            <label className='form-label'>State</label>
            <input
              className='form-control'
              type='text'
            />
          </div>
          <div className='form-group'>
            <label className='form-label'>Zip Code</label>
            <input
              className='form-control'
              type='text'
            />
          </div>
        </div>
        <div className='col-md-6'>
          <p><b className='mb-4'>Billing Info</b></p>
          <PaymentElement id="payment-element" />
          <div className='form-group'>
            <label className='form-label'>Name On Card</label>
            <input
              className='form-control'
              type='text'
            />
          </div>
          <div className='form-group'>
            <label className='form-label'>Address</label>
            <input
              className='form-control'
              type='text'
            />
          </div>
          <div className='form-group'>
            <label className='form-label'>City</label>
            <input
              className='form-control'
              type='text'
            />
          </div>
          <div className='form-group'>
            <label className='form-label'>State</label>
            <input
              className='form-control'
              type='text'
            />
          </div>
          <div className='form-group'>
            <label className='form-label'>Zip Code</label>
            <input
              className='form-control'
              type='text'
            />
          </div>

        </div>
        <div className='col-md-12'>
          <button disabled={isLoading || !stripe || !elements} id="submit">
            <span id="button-text">
              {isLoading ? <div className="spinner" id="spinner"></div> : "Checkout"}
            </span>
          </button>
          {message && <div id="payment-message">{message}</div>}
        </div>
      </div>
    </form> 
  )
}

const mapStateToProps = state => ({
  returnUrl: state.stripe.returnUrl
})

export default connect(mapStateToProps, {})(CheckoutForm)