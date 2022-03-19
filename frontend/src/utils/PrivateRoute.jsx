import { Navigate} from "react-router-dom";
import { useContext } from "react";
import Homepage from "../pages/Homepage";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = () => {
    let {user} = useContext(AuthContext);
    return (
        <>
            {!user ? <Navigate to='/login' /> : <Homepage />}
        </>
    )
}

export default PrivateRoute;