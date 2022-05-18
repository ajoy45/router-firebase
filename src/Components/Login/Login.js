import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const{singInWithGoogle}=useFirebase();
    return (
        <div>
            <h1>please login</h1>
            <button onClick={singInWithGoogle}>Google Singin</button>
            <form>
                <input type="email" name="" id=""placeholder='Type your emai' /><br></br>
                <input type="password" name="" id=""placeholder='Type your password' /><br></br>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;