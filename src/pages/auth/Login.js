import React, { Fragment, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { Box, Grid, Container, Typography, Stack, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LanguagePopover from 'layouts/dashboard/LanguagePopover';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
    // return <Navigate to="/" />;
  }

  return (
    <>
      <LanguagePopover />
      <Container maxWidth="sm" sx={{ mt: 8, textAlign: 'center' }}>
        <h1 className="medium" style={{ textAlign: 'center' }} >Sign In</h1>
        <Stack spacing={2}>
          <Typography> Welcome back, you've been missed! </Typography>
          <Stack direction="row" spacing={3} justifyContent="space-around">
            <Button variant="outlined" startIcon={<GoogleIcon />}>
              Sigin In with Google
            </Button>
            <Button variant="outlined" startIcon={<AppleIcon />}>
              Sign In with Apple ID
            </Button>
          </Stack>
          <Typography fontSize={'20px'}> OR </Typography>
          <form onSubmit={onSubmit}>
            <Stack spacing={4}>
              <TextField
                type="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={onChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AlternateEmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                type="password"
                label="Password"
                name="password"
                value={password}
                onChange={onChange}
                minLength="6"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Remember me"
                />

                <Link to="#" variant="subtitle2">
                  Forgot password?
                </Link>
              </Stack>
              <Button variant="contained"> Sing Up </Button>
            </Stack>
          </form>
        </Stack>
        <p className="my-1">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </Container>
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
