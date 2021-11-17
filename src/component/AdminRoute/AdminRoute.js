import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';

const AdminRoute = ({children, ...rest }) => {
    const {user,isloading,isAdmin} = useAuth();
    if(!isAdmin){
      return (
        <div class="d-flex my-5 justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      )
    }
    return (
        <Route
      {...rest}
      render={({ location }) =>
      user?.email && isAdmin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default AdminRoute;