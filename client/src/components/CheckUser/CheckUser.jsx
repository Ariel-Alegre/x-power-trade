import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const requireAuth = (Component) => {
  const AuthenticatedComponent = ({ isLoggedIn, ...props }) => {
    if (isLoggedIn) {
      return <Component {...props} />;
    }
    return <Redirect to="/login" />;
  };

  const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
  });

  return connect(mapStateToProps)(AuthenticatedComponent);
};

export default requireAuth;
