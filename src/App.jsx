import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Extension from "./components/Extension";
import FAQS from "./components/FAQS";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <Extension />
            <FAQS />
            <Footer />
        </>
    );
};

export default App;
