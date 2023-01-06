import React from "react";
import { Container } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Auth from "./components/auth/auth";
import FishPostDetail from "./components/fishPosts/fishPostDetail/fishPostDetail";
import Footer from "./components/footer/footer";
import "./styles.js";
import "./index.css";

const App = () => {

    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Navigate to="/fishes" />} />
                    <Route path="/fishes" element={<Home />} />
                    <Route path="/fishes/search" element={<Home />} />
                    <Route path="/fishes/:id" element={<FishPostDetail />} />
                    <Route path="/auth" element={!user ? <Auth /> : <Navigate to="/fishes" />}/>
                </Routes>
            </Container>
            <Footer />
        </BrowserRouter>
    );
};

export default App;