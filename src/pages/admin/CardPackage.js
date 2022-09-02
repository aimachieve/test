import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Stack, Typography, Container, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
// components
import Page from 'components/Page';
// actions
import { createPackage, getPackages, deletePackage } from '../../actions/admin'

const CardPackage = ({ createPackage, getPackages, deletePackage, admin: { packages } }) => {
  useEffect(() => {
    getPackages();
  }, [getPackages]);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    rPrice: 0,
    ePrice: 0,
    detail: '',
    credits: 0
  });
  const [cost, setCost] = useState(0)

  const { title, description, rPrice, ePrice, detail, credits } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    createPackage({ title, description, rPrice, ePrice, detail, credits });
  };

  return (
    <Page title="Admin | Credit Card & Package">
      <Container maxWidth='md'>
        <h1 className='medium text-primary' style={{ marginBottom: '40px' }}>
          Credit Card && Credit Packages
        </h1>
        <Stack spacing={3}>
          <>
            <Typography variant="h5">1. Restful API Field</Typography>
            <Typography>Client Side Request: "/create-payment-intent",</Typography>
            <Typography>Parameters: amount, currency, etc..</Typography>

          </>
          <>
            <Typography variant="h5">2. Registeration of Credit Packages</Typography>
            {
              packages ?
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Price(R/Euro)</TableCell>
                        <TableCell>Credits</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {packages.map((p, index) => (
                        <TableRow
                          key={index}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            <b>{p.title}</b>
                          </TableCell>
                          <TableCell><b>{`R${p.rPrice}$ / ${p.ePrice}Euro`}</b></TableCell>
                          <TableCell><b>{p.credits}</b></TableCell>
                          <TableCell>
                            <Button variant="outlined" onClick={() => deletePackage(p._id)}>Delete</Button>
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
            <form onSubmit={onSubmit}>
              <Stack spacing={4}>
                <TextField
                  type="text"
                  label="Title *"
                  name="title"
                  value={title}
                  onChange={onChange}
                />
                <TextField
                  type="text"
                  label="Description *"
                  name="description"
                  value={description}
                  onChange={onChange}
                />
                <TextField
                  type="text"
                  label="Credits *"
                  name="credits"
                  value={credits}
                  onChange={onChange}
                />
                <TextField
                  type="number"
                  label="R$ price *"
                  name="rPrice"
                  value={rPrice}
                  onChange={onChange}
                />
                <TextField
                  type="number"
                  label="Euro Price *"
                  name="ePrice"
                  value={ePrice}
                  onChange={onChange}
                />
                <TextField
                  type="text"
                  label="Detail *"
                  name="detail"
                  value={detail}
                  onChange={onChange}
                />
                <input type="submit" className="btn btn-primary" value="Register" style={{ borderRadius: '10px', }} />
              </Stack>
            </form>
          </>
          <>
            <Typography variant="h5">3. Registeration of the record's cost</Typography>
            <TextField label="1 credit = 1 record = cost" type="number" value={cost} onChange={(e) => setCost(e.target.value)} />
            <Button variant="contained" onClick={() => alert('Successfuly Updated!')}>Update</Button>
          </>
        </Stack>
      </Container>
    </Page>
  );
}

CardPackage.propTypes = {
  createPackage: PropTypes.func.isRequired,
  getPackages: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  admin: state.admin
});

export default connect(
  mapStateToProps,
  { createPackage, getPackages, deletePackage }
)(CardPackage);
