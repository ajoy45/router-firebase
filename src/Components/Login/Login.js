import React from 'react';
import './Login.css'
const Login = () => {


    return (
        <div>
            <h1>google authentication</h1>
            <button>Google Singin</button>
            <form>
                <input type="email" name="" id=""placeholder='Type your emai' /><br></br>
                <input type="password" name="" id=""placeholder='Type your password' /><br></br>
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Login;