import React from "react"
import Navbar from "./navbar"
import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Contact from "../pages/Contact"

const Header = () => {
    return (
        <div>
            <Navbar />
            <header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} /> 
                </Routes>
            </header>

        </div>
    )
}

export default Header