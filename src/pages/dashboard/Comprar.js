import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import { connect } from 'react-redux'
import { getStripePubKey, createPaymentIntent, paid } from '../../actions/stripe'
import { useNavigate } from 'react-router-dom';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '10px',
  p: 4,
};

const CheckoutForm = ({value, packageId, credits, paid}) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    // await paid(packageId, credits)
  };

  return (
    <form onSubmit={handleSubmit} >
      <Stack spacing={3}>
        <Typography variant="h3">Pay with card</Typography>
        <CardElement />
        <Button variant="contained" sx={{ marginTop: '20px', alignItems: 'center' }} disabled={!stripe || !elements} onClick={() => {
          paid(packageId, credits)
          navigate('/dashboard/buy_credits')
        }}>
          Pay ( R$ {value} )
        </Button>
      </Stack>
    </form>
  );
};

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const Comprar = ({value, packageId, credits, getStripePubKey, paid}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  useEffect(() => {
    getStripePubKey()
  }, [getStripePubKey])

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>Comprar</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Elements stripe={stripePromise}>
            <CheckoutForm value={value} packageId = {packageId} credits = {credits} paid={paid} />
          </Elements>
        </Box>
      </Modal>
    </div>
  )
}

const mapStateToProps = state => ({
  stripePubKey: state.stripe.stripePubKey,
  clientSecret: state.stripe.clientSecret
})

export default connect(mapStateToProps, { getStripePubKey, createPaymentIntent, paid })(Comprar)