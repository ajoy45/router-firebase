import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import './Header.css'
import app from "../../firebase.init";
import { getAuth,signOut } from 'firebase/auth';
const auth=getAuth(app)
const Header = () => {
    const[user]=useAuthState(auth)
    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/product'>Product</Link>
                <Link to='/order'>Order</Link>
                <Link to='/resister'>Resister</Link>
                <span>{user?.displayName&&user.displayName}</span>
                {user?.uid
                ?
                <button onClick={()=>signOut(auth)}>Sing Out</button>:
                <Link to='/login'>Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;