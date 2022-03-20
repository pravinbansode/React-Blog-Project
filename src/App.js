import React from "react";
import Header from "./Header"
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Home from "./Home";
import { DataContext } from "./Context";
import Display from "./Display";
import Artical from "./Artical";
import "./style.css"
import Footer from "./Footer";
import Logo from "./Logo";

const App = () => {
    return(
        <>
        <DataContext>
        <div>
            <Router>
                <Logo />
                <Header />
                <Routes>
                    <Route path="/" element={<Navigate to="/home"/>}/>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/category/:selected" element={<Display />}>
                        
                    </Route>
                    <Route path="/category/:selected/:selectedID" element={<Artical />}/>
                </Routes>
                <Footer />
            </Router>
        </div>
        </DataContext>
        </>
    );
};

export default App;