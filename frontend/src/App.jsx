import React,{useEffect, useState} from 'react';
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth';
import {app} from './config/firebase.config'


export default function App() {
  const firebaseAuth=getAuth(app);
  const provider=new GoogleAuthProvider();
  const [auth,setAuth]=useState(false||window.localStorage.getItem("auth")==="true");

  const loginWithGoogle=async ()=>{
    const response=await signInWithPopup(firebaseAuth,provider)
    .then((userCred)=>{
      if(userCred) {
        setAuth(true);
        window.localStorage.setItem("auth","true")
      }
    })
    .catch(()=>{
      console.log("failed to Authenticate");
    })
  };
  useEffect(()=>{
    firebaseAuth.onAuthStateChanged((userCred)=>{
      if(userCred){
        userCred.getIdToken()
        .then(token=>{
          window.localStorage.setItem("auth","true")
          console.log(token);
        })
      }
      else{
        setAuth(false);
        window.localStorage.setItem("auth","false")
      }
    })
  },[]);
  return (
    <>
      <div>
        {auth?<h1>Authenticated</h1>:<button onClick={loginWithGoogle}>LOGIN</button>}
      </div>
    </>
  )
}