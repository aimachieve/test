import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// material
import { styled } from '@material-ui/core/styles';
import { Button, Container, Typography, Grid, Stack, Card, CardContent, CardHeader } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../animate';
import { getPackages } from '../../../actions/admin'
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  backgroundImage: `linear-gradient(180deg, #F4F4F4 0%, #F4F4F4 100%)`,
  margin: theme.spacing(8, 0, 8, 0),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0, 8, 0),
  width: '100%',
  textAlign: 'center',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'center',
    marginBottom: 0
  }
}));
// ----------------------------------------------------------------------

const LandingValues = ({ getPackages, admin: { packages } }) => {
  useEffect(() => {
    getPackages();
  }, [getPackages]);

  return (
    <RootStyle>
      <Container maxWidth="lg" id="values">
        <ContentStyle>
          <MotionInView variants={varFadeInUp}>
            <Typography variant="h3" sx={{ mb: 3, fontFamily: 'Poppins', color: "#1FA0F4", textAlign: "center" }}>
              Choose the ideal package and start registering now!
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            {
              packages ?
                <Grid container spacing={2}>
                  {
                    packages.map((p, index) => (
                      <Grid item xs={12} md={4} key={index}>
                        <Card>
                          <CardContent>
                            <Stack alignItems="center" spacing={2} mb={2}>
                              <Typography variant='h3'>{p.title}</Typography>
                              <Typography>{p.description}</Typography>
                              <Typography>Approximate amount in reais:</Typography>
                              <Typography variant='h2'>R${p.rPrice}</Typography>
                              {/* <Typography>(Cost in euros: € {p.ePrice})</Typography> */}
                              <Typography>({p.credits} Credits)</Typography>
                              <Button variant='contained' href={`/dashboard/purchase-summary/${p._id}`}>Register</Button>
                              <Typography style={{ fontWeight: 'bold' }}>SEE PRICING DETAILS</Typography>
                              <Typography>{p.detail}</Typography>
                              {/* <Stack direction={'row'} spacing={2}>
                            <img src='/images/purple-bullet.svg' style={{ width: '15px' }} alt="check" />
                            <Typography sx={{ textAlign: 'left' }}>Time stamp attesting the date and time of proof collection</Typography>
                          </Stack> */}
                            </Stack>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))
                  }
                </Grid> :
                <h1 className='medium'>No packages for now.</h1>
            }
          </MotionInView>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}

LandingValues.propTypes = {
  getPackages: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  admin: state.admin
});

export default connect(
  mapStateToProps,
  { getPackages }
)(LandingValues);
