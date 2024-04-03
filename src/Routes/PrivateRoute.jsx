/* eslint-disable react/prop-types */
import { Navigate, useLocation } from 'react-router-dom';
import {Spinner} from "@nextui-org/react";
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation();

    if(loading){
        return <div className="flex justify-center items-center m-8">
           <Spinner size="lg" color="secondary" />
        </div>
    }

    if(user){
        return children;
    } 

    return <Navigate to="/login" state={{from : location}} replace></Navigate>
};

export default PrivateRoute;


//  <Spinner size="lg" color="secondary" />