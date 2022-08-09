import { Children } from "react";
import { Navigate, useLocation } from "react-router-dom";
import {useSelector} from 'react-redux';
import React from "react";

function RouteHandle({children}){
    const auth = useSelector(({usuario}) => usuario)
    let location = useLocation();
    if(!auth.currentUser){
        return <Navigate to="/" statte={{form: location}}replace />
    }
    return children;
}

export default RouteHandle;