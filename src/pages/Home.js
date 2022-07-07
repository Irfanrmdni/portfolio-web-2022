import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../parts/Home/Header';
import About from '../parts/Home/About';
import Skills from '../parts/Home/Skills';
import Portfolio from '../parts/Home/Portfolio';
import Contact from '../parts/Contact';
import UseScrollTop from '../components/UseScrollTop';

function Home() {
    UseScrollTop();

    return (
        <>
            {/* NAVBAR */}
            <Navbar />

            {/* HEADER */}
            <Header />

            {/* ABOUT */}
            <About />

            {/* TOOLS & SKILLS */}
            <Skills />

            {/* PORTFOLIO */}
            <Portfolio />

            {/* CONTACT */}
            <Contact />
        </>
    )
}

export default Home;