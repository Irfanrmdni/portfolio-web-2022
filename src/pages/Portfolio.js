import React from 'react';
import Navbar from '../components/Navbar';
import Projects from '../parts/Portfolio/Projects';
import UseScrollTop from '../components/UseScrollTop';

function Portfolio() {
    UseScrollTop();
    const time = new Date().getFullYear();

    return (
        <>
            <Navbar />
            <Projects />
            <footer className="w-full lg:w-[80%] lg:float-right px-[15px] md:px-[20px] lg:px-[30px] py-2 md:py-3 bg-bluesecondary text-center lg:hidden">
                <span className="inline-block text-white text-xs md:text-sm font-light">© Copyright irpan ramdani - {time}</span>
            </footer>
        </>
    )
}

export default Portfolio;