
import React, { useEffect, useState } from 'react';
import { Stack, Typography, Container, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// components
import Page from 'components/Page';
import { createCoupon, getCoupons, deleteCoupon } from '../../actions/admin'

const Discount = ({createCoupon, getCoupons, deleteCoupon, admin: {coupons}}) => {
  useEffect(() => {
    getCoupons()
  }, [getCoupons])

  const [name, setName] = useState('')
  const [percentage, setPercentage] = useState(0)

  return (
    <Page title="Registro.Legal | Generate Hash">
      <Container maxWidth='md'>
        <h1 className='medium text-primary' style={{ marginBottom: '40px' }}>
          Discount Coupon
        </h1>
        <Stack spacing={3}>
          <>
            <Typography variant="h5">1. Current Coupon List</Typography>
            {
              coupons ?
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Price(R/Euro)</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {coupons.map((c, index) => (
                        <TableRow
                          key={index}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            <b>{c.name}</b>
                          </TableCell>
                          <TableCell><b>{`${c.percentage} %`}</b></TableCell>
                          <TableCell>
                            <Button variant="outlined" onClick={() => deleteCoupon(c._id)}>Delete</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer> :
                <Typography gutterBottom>
                  You don't have any registrations yet, make yours right now.
                </Typography>
            }
          </>
          <>
            <Typography variant="h5">2. Create a new coupon</Typography>
            <TextField label="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <TextField label="Percentage" type="number" onChange={(e) => setPercentage(e.target.value)} />
            <Button variant="contained" onClick={() => createCoupon({ name, percentage})}>Create</Button>
          </>
        </Stack>
      </Container>
    </Page>
  );
}


Discount.propTypes = {
  createCoupon: PropTypes.func.isRequired,
  getCoupons: PropTypes.func.isRequired,
  deleteCoupon: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  admin: state.admin
});

export default connect(
  mapStateToProps,
  { createCoupon, getCoupons, deleteCoupon }
)(Discount)