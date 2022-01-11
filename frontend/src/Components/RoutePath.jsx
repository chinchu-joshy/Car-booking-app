import React from 'react'
import {Route, Navigate} from 'react-router-dom'
function RoutePath(props) {
    if(localStorage.getItem('user')){
        return <Route {...props}/>
      }else{
        <Navigate to='/login'/>
      }
}

export default RoutePath
