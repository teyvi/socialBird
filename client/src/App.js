import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SplashScreen from "./components/pages/SplashScreen";
import Login from "./components/pages/Login";
import Signup from "./components/pages/SignUp";
import { useAuth } from "./hooks/useAuth";
import Dashboard from "./components/pages/dashboard";
import ResetPassword from "./components/pages/ResetPassword";
import RequestPasswordReset from "./components/pages/RequestPasswordReset";
import EmailVerifiedSuccess from "./components/pages/EmailVerifiedSuccess";
import VerifyEmail from "./components/pages/VerifyEmail";
import DashboardLayout from "./components/layouts.js/dashboard";
import Post from "./components/pages/Post";
import SchedulePost from "./components/pages/SchedulePost";
import Analytics from "./components/pages/Analytics";

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
<Routes>
  <Route path="/" element={<SplashScreen />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/reset-password" element={<ResetPassword />} />
  <Route path="/requestpasswordreset" element={<RequestPasswordReset />} />
  <Route path="/verify-email" element={<EmailVerifiedSuccess />} />
  <Route path="/email-sent" element={<VerifyEmail />} />
  <Route path="/dashboard" element={<DashboardLayout />}>
    <Route index element={user ? <Dashboard /> : <Navigate to="/login" />} />
    <Route path="post" element={<Post />}/>
    <Route path="schedulepost" element={<SchedulePost />}/>
    <Route path="analytics" element={<Analytics />}/>
  </Route>
  <Route path="*" element={<Navigate to="/" replace />} />
</Routes>
  </div>
  );
}

export default App;
