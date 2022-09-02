import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../pages/layout/Spinner';

const PrivateRoute = ({
  children,
  auth: { isAuthenticated, loading },
  ...rest
}) => {
  if (loading)
    return <Spinner />

  // else if (user.role !== 'admin') {
  //   return <Navigate to={PATH_USER.home} />
  // }
  if (isAuthenticated)
    return <>{children}</>

  return <Navigate to="/login" />
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
