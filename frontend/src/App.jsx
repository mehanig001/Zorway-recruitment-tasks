import React,{ useState} from 'react';
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth';
import {app} from './config/firebase.config'
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import StudentDashboard from './pages/StudentDashboard';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  const firebaseAuth=getAuth(app);
  const provider=new GoogleAuthProvider();
  const [auth,setAuth]=useState(false);

  const adminLoginWithGoogle=async ()=>{
    const response=await signInWithPopup(firebaseAuth,provider)
    .then(async (userCred)=>{
      if(userCred){
        setAuth(true);
        const token = await firebaseAuth.currentUser.getIdToken();
        const res = await fetch(
          `http://localhost:8080/api/users/admin/login`,
          {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = await res.json();
        console.log(data);
      }
    })
    .catch((error)=>{
      console.log("failed to Authenticate",error);
    })
  };
  const studentLoginWithGoogle=async ()=>{
    const response=await signInWithPopup(firebaseAuth,provider)
    .then(async (userCred)=>{
      if(userCred){
        setAuth(true);
        const token = await firebaseAuth.currentUser.getIdToken();
        const res = await fetch(
          `http://localhost:8080/api/users/student/login`,
          {
            method: "POST",
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = await res.json();
        console.log(data);
      }
    })
    .catch((error)=>{
      console.log("failed to Authenticate",error);
    })
  };
  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={
              <>
                  <div className='min-h-screen flex justify-center items-center gap-2 bg-violet-800'>
                    <div className='p-10 rounded-3xl bg-orange-400 flex flex-col gap-8 text-center'>
                      <h1 className='font-black text-cyan-900 text-lg'>Admin Login</h1>
                    <button className='text-teal-100 bg-slate-800 rounded-md p-2' onClick={adminLoginWithGoogle}>LOGIN with GOOGLE</button>
                    </div>
                    <div className='p-10 rounded-3xl bg-orange-400 flex flex-col gap-8 text-center'>
                      <h1 className='font-black text-cyan-900 text-lg'>Student Login</h1>
                    <button className='text-teal-100 bg-slate-800 rounded-md p-2' onClick={studentLoginWithGoogle}>LOGIN with GOOGLE</button>
                    </div>
                  </div>
              </>
            } />
            <Route
              path="/users/student/:userid"
              element={auth ? <StudentDashboard/> : <Navigate to="/" />}
            />
            <Route
              path="/users/admin/:userid"
              element={auth ? <AdminDashboard/> : <Navigate to="/" />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}