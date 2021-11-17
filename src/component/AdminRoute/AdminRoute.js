import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';

const AdminRoute = ({children, ...rest }) => {
    const {user,isloading,isAdmin} = useAuth();
    if(!isAdmin){
      return (
            <div class="text-center mx-auto mt-5 spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
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