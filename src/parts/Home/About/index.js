import React from 'react';
import Container from '../../../components/Container';
import Title from '../../../components/Title';

function About() {
    return (
        <>
            <Container variant="white" id="about">
                <Title>About me</Title>

                <div className="w-full md:flex md:flex-row md:items-center md:justify-between md:mt-[25px]">
                    <img src="./images/about-mobile.jpg" alt="about" className="w-full md:w-4/12 lg:w-5/12 md:min-h-[185px] lg:min-h-[198px] my-[25px] md:my-0 inline-block" />
                    <div className="w-full md:w-8/12 lg:w-7/12 text-center md:text-left md:ml-[30px] xl:ml-[40px] 2xl:ml-[50px]">
                        <h5 className="text-[22px] lg:text-xl xl:text-2xl 2xl:text-[28px] 2xl:leading-[33px] leading-[26px] text-bluesecondary font-medium">Here is a brief introduction about myself</h5>
                        <p className="text-base 2xl:text-xl 2xl:leading-[30px] tracking-wide text-bluesecondary mt-[10px] lg:mt-[6px] 2xl:mt-3">Hi everyone. Let me introduce myself. my full name is irpan ramdani. I am from Indonesia and currently I am 21 years old. I am a final year student majoring in informatics engineering at Sangga Buana Ypkp University, Bandung City, I have an interest in web development especially as a front end developer and sometimes I also learn how to design a user interface on a website. besides that I have experience in working on several website projects</p>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default About;