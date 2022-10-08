import React from "react";
import { Navigate, Route } from "react-router-dom";

function Protectedroute({ auth , component: Component, ...restOfProps }) {
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        {
          if(auth) return <Component {...props} />
          if(!auth) return <Navigate to={{path: '/', state: {from: props.location}}} />
        }
      }
    />
  );
}

export default Protectedroute;