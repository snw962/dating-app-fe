import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import './layout.css';
import Login from "../login/Login";
import Main from "./Main/Main";

function Layout() {
    return (
        <section className="layout">

                    <Login/>      
          
        </section>
    );
}
export default Layout;