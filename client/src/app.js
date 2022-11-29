import React from "react";
import { Container } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useStyles from './styles';
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";


const App = () => {
    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
};

export default App;