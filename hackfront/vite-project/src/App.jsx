import { Routes, Route, Navigate } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";  
import Dashboard from "./pages/Dashboard";

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Signin" />}/>
      <Route path = "/Signin" element={<Signin/>} />
      <Route path = "/Signup" element={<Signup/>} />
     <Route path = "/dashboard" element={<Dashboard/>} /> 
    </Routes>
  )

}