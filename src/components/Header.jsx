import React from "react"
import Navbar from "./navbar"
import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import About from "../pages/About";
import SignUp from "../pages/SignUp";

const Header = () => {
    return (
        <div>
            <Navbar />
            <header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </header>

        </div>
    )
}

export default Header