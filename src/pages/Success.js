import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Navbar from '../components/Navbar';
import UseScrollTop from '../components/UseScrollTop';

function Success() {
    const time = new Date().getFullYear();
    UseScrollTop();

    return (
        <>
            <Navbar />

            <Container variant="gray" headerMobile>
                <div className="w-full h-screen flex items-center">
                    <div className="w-full mx-auto text-center">
                        <img src="./images/check.svg" alt="check" className="w-auto md:w-[105px] lg:w-[120px] xl:w-[135px] 2xl:w-[150px] inline-block" />
                        <h1 className="text-2xl md:text-[28px] md:leading-[38px] lg:text-[32px] lg:leading-[40px] xl:text-4xl xl:leading-[44px] 2xl:text-[44px] 2xl:leading-[52px] font-bold uppercase text-center mt-[15px] text-blueprimary">Thank you have a nice day</h1>
                        <p className="w-[70%] md:w-[50%] lg:w-[55%] xl:w-[50%] 2xl:w-[52%] mx-auto text-lg md:text-[22px] md:leading-[32px] lg:text-2xl xl:text-[26px] xl:leading-[34px] 2xl:text-[32px] 2xl:leading-[40px] font-medium text-center text-bluesecondary mb-[30px]">You have successfully sent an email message to Irpan Ramdani</p>
                        <Link to="/" className="w-[99px] md:w-[115px] lg:w-[120px] xl:w-[135px] 2xl:w-[150px] md:h-[40px] xl:h-[45px] 2xl:h-[50px] h-[35px] text-base md:text-lg xl:text-xl 2xl:text-2xl font-bold text-center rounded underline leading-[35px] md:leading-10 xl:leading-[45px] 2xl:leading-[50px] text-white bg-bluesecondary hover:bg-yellow transition duration-150 ease-in uppercase inline-block">
                            Back
                            <img src="./images/arrow-right.svg" alt="arrow-right" className="w-auto inline-block md:w-[9px] 2xl:w-[10px] ml-1 md:ml-[6px] -mt-[2px] md:mt-0" />
                        </Link>
                    </div>
                </div>
            </Container>

            <footer className="w-full lg:w-[80%] lg:float-right px-[15px] md:px-[20px] lg:px-[30px] py-2 md:py-3 bg-bluesecondary text-center lg:hidden">
                <span className="inline-block text-white text-xs md:text-sm font-light">© Copyright irpan ramdani - {time}</span>
            </footer>
        </>
    )
}

export default Success;