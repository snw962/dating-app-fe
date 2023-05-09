import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import "./layout.css";
import Login from "../login/Login";
import Main from "./Main/Main";
import Client from "./client/Client";
import Register from "../register/Register";
import ForgotPassword from "../forgot-password/ForgotPassword";

function Layout() {
  return (
    <section className="layout">

      <Routes>
      <Route path="/" element={<Login/>}/> 
      <Route path="/register" element={<Register/>}/> 
      <Route path="/client" element={<Client/>}/> 
      <Route path="/forgotPassword" element={<ForgotPassword/>}/>
      </Routes>
    </section>
  );
}
export default Layout;
