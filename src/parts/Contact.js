import React from 'react';
import Title from '../components/Title';

function Contact() {
    const time = new Date().getFullYear();

    return (
        <>
            {/* CONTACT */}
            <section className="w-full lg:w-[80%] lg:float-right py-[60px] px-[15px] md:px-[20px] lg:px-[30px] xl:px-[55px] 2xl:px-[85px] overflow-hidden bg-graybackground" id="contact">
                <Title>CONTACT</Title>

                <div className="w-full mt-[25px]">
                    <h5 className="text-xl md:text-[22px] lg:text-xl xl:text-2xl 2xl:text-[28px] 2xl:leading-[33px] md:leading-[26px] font-medium text-bluesecondary m-auto text-center md:text-left">Several ways to contact me</h5>

                    <div className="w-full flex flex-col md:flex-row md:mt-[25px] 2xl:mt-[35px]">
                        <div className="w-8/12 md:w-4/12 m-auto md:m-0 flex flex-row items-center mt-[25px] md:mt-0">
                            <div className="w-3/12 md:w-max md:mr-4 xl:mr-6">
                                <img src="./images/email.svg" alt="email" className="w-[32px] xl:w-[35px] 2xl:w-[38px]" />
                            </div>
                            <div className="w-full">
                                <h5 className="text-base xl:text-lg 2xl:text-xl font-medium text-bluesecondary">Email</h5>
                                <p className="text-sm 2xl:text-base text-bluesecondary">irfanrmdni209@gmail.com</p>
                            </div>
                        </div>

                        <div className="w-8/12 md:w-4/12 m-auto md:m-0 flex flex-row items-center mt-[25px] md:mt-0">
                            <div className="w-3/12 md:w-max md:mr-4 xl:mr-6">
                                <img src="./images/phone.svg" alt="email" className="w-[26px] xl:w-[28px] 2xl:w-[30px]" />
                            </div>
                            <div className="w-full">
                                <h5 className="text-base xl:text-lg 2xl:text-xl font-medium text-bluesecondary">Phone</h5>
                                <p className="text-sm 2xl:text-base text-bluesecondary">0896-7745-1818</p>
                            </div>
                        </div>

                        <div className="w-8/12 md:w-4/12 m-auto md:m-0 flex flex-row items-center mt-[25px] md:mt-0">
                            <div className="w-3/12 md:w-max md:mr-4 xl:mr-6">
                                <img src="./images/address.svg" alt="email" className="w-[21px] xl:w-[23px] 2xl:w-[25px]" />
                            </div>
                            <div className="w-full">
                                <h5 className="text-base xl:text-lg 2xl:text-xl font-medium text-bluesecondary">Address</h5>
                                <p className="text-sm 2xl:text-base text-bluesecondary">Bandung city, West Java, Indonesia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="w-full lg:w-[80%] lg:float-right px-[15px] md:px-[20px] lg:px-[30px] py-2 md:py-3 bg-bluesecondary text-center lg:hidden">
                <span className="inline-block text-white text-xs md:text-sm font-light">© Copyright irpan ramdani - {time}</span>
            </footer>
        </>
    )
}

export default Contact;