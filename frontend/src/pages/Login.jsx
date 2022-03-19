import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    let { loginUser } = useContext(AuthContext); 
  return (
    <div>
        <Link to="/">Go to Homepage</Link>
        <form onSubmit={loginUser}>
            <input type="text" name="username" placeholder="Enter username" />
            <input type="password" name="password" placeholder="Enter password" />
            <input type="submit"/>
        </form>
    </div>
  );
}

export default Login