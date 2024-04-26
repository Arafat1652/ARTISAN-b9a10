import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname);

    if(loading){
        return <span className="loading loading-spinner loading-lg text-error ml-[650px] mt-10"></span>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;