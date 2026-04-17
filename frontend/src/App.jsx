import React from "react";
import { Routes, Route,Navigate } from "react-router-dom"; 
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ChatPage from "./pages/ChatPage";
import CallPage from "./pages/CallPage";
import Onboarding from "./pages/OnboardingPage.jsx";
import NotificationPage from "./pages/NotificationPage";
import { Toaster } from "react-hot-toast";
import { useEffect,useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { axiosInstance } from "./lib/axios";
import PageLoader from "./components/PageLoader.jsx";
import { getAuthUser } from "./lib/api";
import useAuthUser from "./hooks/useAuthUser.js";




const App = () => {
  //axios
  //react query tanstack query
  const{isLoading,authUser}=useAuthUser();
  const isAuthenticated=Boolean(authUser)
  const isOnboarded=authUser?.isOnboarded
  if(isLoading) return <PageLoader/>;
  
  
  

  return (
    <div className="h-screen" data-theme="night">
      <Routes>
        <Route path="/"element={
          isAuthenticated && isOnboarded ?(<HomePage/>):(
          <Navigate to={!isAuthenticated ?"/login":"/onboarding"}/>
        )}/>
        <Route path="/signup" element={!isAuthenticated ? <SignUpPage /> : <Navigate to="/" />}/>
        <Route path="/login" element={!isAuthenticated ? <LoginPage /> : <Navigate to={
          isOnboarded?"/":"/onboarding"}/>
        }/>
        <Route path="/chat" element={isAuthenticated ? <ChatPage /> : <Navigate to="/login" />}/>
        <Route path="/call" element={isAuthenticated ? <CallPage /> : <Navigate to="/login" />}/>
       <Route path="/onboarding" element={isAuthenticated ? (!isOnboarded ? <OnboardingPage /> : <Navigate to="/" />) : <Navigate to="/login" />} />

        <Route path="/notification" element={isAuthenticated ? <NotificationPage /> : <Navigate to="/login" />}/>
      </Routes>

      <Toaster/>
      
    </div>
  );
};

export default App;
