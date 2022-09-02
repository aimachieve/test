import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../pages/layout/Spinner';

const AdminRoute = ({
  children,
  auth: { isAuthenticated, loading, user },
  ...rest
}) => {
  if (loading)
    return <Spinner />

  if (user.role === 'admin') {
    return <>{children}</>
  }

  return <Navigate to="/login" />
};

AdminRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(AdminRoute);
