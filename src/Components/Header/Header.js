import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const {users,handelSingOut}=useFirebase()
    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/product'>Product</Link>
                <Link to='/order'>Order</Link>
                <Link to='/resister'>Resister</Link>
                <span>{users?.displayName && users?.displayName}</span>
                {users?.uid
                ?
                <button onClick={handelSingOut}>Sing Out</button>:
                <Link to='/login'>Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;