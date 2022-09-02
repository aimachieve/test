import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import { Box, Grid, Container, Typography, Stack, TextField, Button, Checkbox } from '@material-ui/core';


const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    document: '',
    email: '',
    company: '',
    telephone: '',
    password: '',
    password2: '',
    checked: false
  });

  const { name, document, email, company, telephone, password, password2, checked } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.checked });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, document, email, company, telephone, password, checked });
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
    // return <Navigate to="/" />;
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 20 }}>
      <h1 className="medium text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user" /> Create Your Account
      </p>
      <form onSubmit={onSubmit}>
        <Stack spacing={4}>
          <TextField
            type="text"
            label="Name *"
            name="name"
            value={name}
            onChange={onChange}
          />
          <TextField
            type="text"
            label="Document(RG, CPF, CNPJ, etc...) *"
            name="document"
            value={document}
            onChange={onChange}
          />
          <TextField
            type="email"
            label="Email *"
            name="email"
            value={email}
            onChange={onChange}
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
          <TextField
            type="text"
            label="Company"
            name="company"
            value={company}
            onChange={onChange}
          />
          <TextField
            type="text"
            label="Telephone"
            name="telephone"
            value={telephone}
            onChange={onChange}
          />
          <TextField
            type="password"
            label="Password *"
            name="password"
            value={password}
            onChange={onChange}
          />
          <TextField
            type="password"
            label="Confirm Password *"
            name="password2"
            value={password2}
            onChange={onChange}
          />
          <Stack>
            <Stack alignItems="center" direction="row">
              <Checkbox
                name="checked"
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
              <Typography>I accept the <a href='/terms' target={"_blank"}>terms of use</a> of the system</Typography>
            </Stack>
            <Typography sx={{ display: checked ? 'none' : '', fontSize: '12px' }}>* You must agree with the terms of use</Typography>
          </Stack>
          <Button type="submit" variant="contained" disabled={!checked} style={{ borderRadius: '10px', opacity: !checked ?? 'none' }} >Register</Button>
        </Stack>
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </Container>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
