import React from "react";
import { Routes, Route,Navigate } from "react-router-dom"; 
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ChatPage from "./pages/ChatPage";
import CallPage from "./pages/CallPage";
import Onboarding from "./pages/Onboarding";
import NotificationPage from "./pages/NotificationPage";
import { Toaster } from "react-hot-toast";
import { useEffect,useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { axiosInstance } from "./lib/axios";


const App = () => {
  //axios
  //react query tanstack query
  const {data:authData,isLoading,error}=useQuery({queryKey:["authUser"],
    queryFn:async()=>{
      const res=await axiosInstance.get("/auth/me")
      
      return res.data;
    },
    retry:false,

  });
  const authUser=authData?.user
  
  
  

  return (
    <div className="h-screen" data-theme="night">
      <Routes>
        <Route path="/"element={authUser ? <HomePage /> : <Navigate to="/login" />}/>
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />}/>
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />}/>
        <Route path="/chat" element={authUser ? <ChatPage /> : <Navigate to="/login" />}/>
        <Route path="/call" element={authUser ? <CallPage /> : <Navigate to="/login" />}/>
        <Route path="/onboarding" element={authUser ? <Onboarding /> : <Navigate to="/login" />}/>
        <Route path="/notification" element={authUser ? <NotificationPage /> : <Navigate to="/login" />}/>
      </Routes>

      <Toaster/>
      
    </div>
  );
};

export default App;
