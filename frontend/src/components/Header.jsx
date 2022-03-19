import { Link } from "react-router-dom"
import { useContext } from "react";
import  {AuthContext}  from "../context/AuthContext";

const Header = () => {
    const {user, logout} = useContext(AuthContext);
  return (
    <div className="header">
      <Link to="/">Homepage</Link>
      <span> | </span>
      {user ? <p onClick={() => logout()}>Logout</p> : <Link to="/login">Login</Link> }
        <br/>
      {user && <p>{user.username}</p>}
    </div>
  );
}

export default Header