import React from 'react'
import { Navigate} from 'react-router-dom';

const PrivateRoute = ({isLogin , children}) => {

  if(isLogin){
    return children;
  }
  return <Navigate to="/login" />
}

export default PrivateRoute
