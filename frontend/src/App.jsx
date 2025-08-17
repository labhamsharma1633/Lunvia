import React from "react";
import { Routes, Route } from "react-router-dom"; 
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
import { axiosInstance } from "./lib/axios";

const App = () => {
  //axios
  //react query tanstack query
  const {data,isLoading,error}=useQuery({queryKey:["todos"],
    queryFn:async()=>{
      const res=await axiosInstance.get("/auth/me")
      
      return res.data;
    },
    retry:false,

  });
  console.log(data);
  
  
  

  return (
    <div className="h-screen" data-theme="night">
      
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/chat" element={<ChatPage/>}/>
        <Route path="/call" element={<CallPage/>}/>
        <Route path="/onboarding" element={<Onboarding/>}/>
        <Route path="/notification" element={<NotificationPage/>}/>



      </Routes>
      <Toaster/>
      
    </div>
  );
};

export default App;
