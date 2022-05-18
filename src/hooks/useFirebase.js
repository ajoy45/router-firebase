import { useEffect, useState } from "react"
import{ getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut}from'firebase/auth'
import app from "../firebase.init";
const auth=getAuth(app)

const useFirebase=()=>{
    const googleProvider = new GoogleAuthProvider();
    const[users,setUsers]=useState({});
    const singInWithGoogle=()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            const user=result.user;
            console.log(user);
            setUsers(user)
        })
    }
    const handelSingOut=()=>{
        signOut(auth)
        .then(()=>{})
    }
    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            setUsers(user)
        })
    },[])
    return{
        users,
        handelSingOut,
        singInWithGoogle
    }
}
export default useFirebase;