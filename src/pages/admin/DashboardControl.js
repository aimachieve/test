import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// material
import { Card, CardContent, Container, Grid, Stack, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
// Actions
import { getUsers, getRecords, getTopHolders } from '../../actions/admin'
// ----------------------------------------------------------------------

const DashboardControl = ({ getUsers, getRecords, getTopHolders, admin: { users, records, top_holders } }) => {
  const { themeStretch } = useSettings();

  useEffect(() => {
    getUsers()
    getRecords()
    getTopHolders()
  }, [getUsers, getRecords, getTopHolders])

  return (
    <Page title="Admin | Dashboard Control">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '200px' }}>
              <CardContent>
                <Typography variant="h5">Report of Number of registrations per period</Typography>
                <h1 className='medium text-primary' style={{ textAlign: 'center' }} > {users ? users.length : 0}</h1>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '200px' }}>
              <CardContent>
                <Typography variant="h5">Report of Number of registrations by project model</Typography>
                <h1 className='medium text-primary' style={{ textAlign: 'center' }} > {records ? records.length : 0}</h1>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5">Report of Title Holders who generated the most projects</Typography>
                {
                  top_holders && top_holders.length > 0 ?
                    <TableContainer component={Paper} sx={{maxHeight: '200px'}}>
                      <Table aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>Rank</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Records</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {top_holders.map((t, index) => (
                            <TableRow
                              key={index}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                              <TableCell component="th" scope="row">
                                <b>{index + 1}</b>
                              </TableCell>
                              <TableCell><b>{t.name}</b></TableCell>
                              <TableCell><b>{t.length}</b></TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer> :
                    <Typography gutterBottom sx={{textAlign: 'center'}}>
                      No Data.
                    </Typography>
                }
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}

DashboardControl.propTypes = {
  getUsers: PropTypes.func.isRequired,
  getRecords: PropTypes.func.isRequired,
  getTopHolders: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  admin: state.admin
});

export default connect(
  mapStateToProps,
  { getUsers, getRecords, getTopHolders }
)(DashboardControl);
