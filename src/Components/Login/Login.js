import { getAuth } from 'firebase/auth';
import React from 'react';
import{useSignInWithGoogle} from'react-firebase-hooks/auth'
import app from "../../firebase.init";
const auth=getAuth(app)
const Login = () => {
    const [signInWithGoogle,user] = useSignInWithGoogle(auth);

    return (
        <div>
            <h1>please login</h1>
            <button onClick={()=>signInWithGoogle()}>Google Singin</button>
            <form>
                <input type="email" name="" id=""placeholder='Type your emai' /><br></br>
                <input type="password" name="" id=""placeholder='Type your password' /><br></br>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;