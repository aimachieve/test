import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// material
import { styled } from '@material-ui/core/styles';
import { Button, Container, Typography, Grid, Stack, Card, CardContent, TextField, Divider, Select } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../components/animate';
import { FormControl } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import Comprar from './Comprar'
import { useParams } from 'react-router-dom'
// Actions
import { getPackageById, getCoupons } from '../../actions/admin';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  // backgroundImage: `linear-gradient(180deg, #F4F4F4 0%, #F4F4F4 100%)`,
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  marginBottom: theme.spacing(10),
  borderRadius: 2,
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    marginBottom: 0
  }
}));
// ----------------------------------------------------------------------

const PurchaseSummary = ({ getPackageById, getCoupons, admin: { current_package, coupons } }) => {
  const { id } = useParams();
  useEffect(() => {
    getPackageById(id);
    getCoupons();
  }, [getPackageById, getCoupons]);

  const [amount, setAmount] = React.useState(1);
  const [coupon, setCoupon] = React.useState('');
  const [discount, setDiscount] = React.useState(0)

  const applyCoupon = () => {
    console.log("coupons=>", coupons)
    const contained = (c) => {
      return coupon === c.name
    }

    if (coupon) {
      const exist = coupons && coupons.filter(contained);
      if (exist.length > 0) {
        console.log(exist)
        setDiscount(current_package && current_package.rPrice * exist[0].percentage / 100)
      } else {
        alert("Invalid Coupon")
        setDiscount(0)
        setCoupon('')
      }
    }
    else
      alert("No coupon")
  }

  return (
    <RootStyle>
      <Container maxWidth="md">
        <ContentStyle>
          <Card>
            <CardContent>
              <MotionInView variants={varFadeInUp}>
                <Typography variant="h3" sx={{ mb: 3, textAlign: "center" }}>
                  Purchase Summary
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Grid container spacing={2} mb={2}>
                  <Grid item xs={12} md={6}>
                    <Typography>Tax information</Typography>
                    <Divider sx={{ marginBottom: '20px' }} />
                    <Stack direction="column" spacing={1} sx={{ border: '1px solid #ddd', padding: 1, borderRadius: 1 }} justifyContent="center">
                      <TextField label="CPF/CNPJ *" fullWidth />
                      <TextField label="CEP *" fullWidth />
                      <TextField label="Public place *" fullWidth />
                      <Stack direction="row" spacing={2}>
                        <TextField label="Number *" fullWidth />
                        <TextField label="Neighborhood *" fullWidth />
                      </Stack>
                      <TextField label="Complement" fullWidth />
                      <Stack direction={'row'} spacing={2} >
                        <TextField label="City *" fullWidth />
                        <TextField label="UF *" fullWidth />
                      </Stack>
                      <Stack>
                        <Button variant="contained" sx={{ margin: 'auto' }} onClick={() => alert("Saved Successfully!")}>To save</Button>
                      </Stack>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography>Purchase Review:</Typography>
                    <Divider sx={{ marginBottom: '20px' }} />
                    <Stack direction="column" spacing={1}>
                      <Stack direction="row" justifyContent={'space-between'}>
                        <Typography>Package:</Typography>
                        <Typography sx={{ fontWeight: 'bold' }}>{current_package && current_package.title}</Typography>
                      </Stack>
                      <Divider sx={{ marginBottom: '10px' }} />

                      <Stack direction="row" justifyContent={'space-between'}>
                        <Typography>Credits:</Typography>
                        <Typography sx={{ fontWeight: 'bold' }}>{current_package && current_package.credits}</Typography>
                      </Stack>
                      <Divider sx={{ marginBottom: '10px' }} />

                      <Stack direction="row" justifyContent={'space-between'} alignItems="flex-end">
                        <Typography>The amount:</Typography>
                        <FormControl>
                          <Select
                            defaultValue={1}
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                          >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                          </Select>
                        </FormControl>
                      </Stack>
                      <Divider sx={{ marginBottom: '10px' }} />

                      <Stack direction="row" justifyContent={'space-between'}>
                        <Typography>package value:</Typography>
                        <Typography sx={{ fontWeight: 'bold' }}>R$ {current_package && current_package.rPrice}</Typography>
                      </Stack>
                      <Divider sx={{ marginBottom: '10px' }} />

                      <Stack direction="row" justifyContent={'space-between'}>
                        <Typography>package discount:</Typography>
                        <Typography sx={{ fontWeight: 'bold' }}>- R$ {discount}</Typography>
                      </Stack>
                      <Divider sx={{ marginBottom: '10px' }} />

                      <Stack direction="row" justifyContent={'space-between'}>
                        <Typography>Value charged:</Typography>
                        <Typography sx={{ fontWeight: 'bold' }} color="primary">R$ {current_package && current_package.rPrice * amount - discount}</Typography>
                      </Stack>

                      <Stack direction="row" spacing={2} justifyContent="space-between">
                        <TextField label="Discount coupon" value={coupon} onChange={(e) => setCoupon(e.target.value)} fullWidth />
                        <Button variant="contained" onClick={() => applyCoupon()}>Apply</Button>
                        <Button variant="outlined" onClick={() => {
                          setDiscount(0)
                          setCoupon('')
                        }}>
                          Clean
                        </Button>
                      </Stack>
                    </Stack>
                  </Grid>
                </Grid>

                <Stack justifyContent="center" spacing={2} direction="row">
                  <Comprar value = {current_package && current_package.rPrice * amount - discount} packageId={current_package && current_package._id} credits={current_package && current_package.credits} />
                  <Button variant="outlined" href="/dashboard/buy_credits">Cancel</Button>
                </Stack>
              </MotionInView>
            </CardContent>
          </Card>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}

PurchaseSummary.propTypes = {
  getPackageById: PropTypes.func.isRequired,
  getCoupons: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  admin: state.admin
});

export default connect(mapStateToProps, { getPackageById, getCoupons })(PurchaseSummary);
