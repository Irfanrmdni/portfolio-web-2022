import React, { useEffect, useRef } from 'react';
import Container from '../../../components/Container';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import Particles from '../../../components/Particles';

function Header() {
    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                'front-end developer',
            ],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
            showCursor: false,
        };

        typed.current = new Typed(el.current, options);

        return () => {
            typed.current.destroy();
        }
    }, []);

    function refreshPage() {
        setTimeout(() => {
            window.location.reload(false);
        }, 500);
    }

    return (
        <>
            <Container variant="gray" id="home" headerMobile>
                <Particles />

                <div className="relative z-10 w-full flex flex-col items-center justify-center">

                    <div className="w-full md:flex md:flex-row md:items-center md:justify-between">
                        <div className="w-[160px] sm:w-[180px] md:w-4/12 sm:h-[180px] h-[160px] md:h-full md:order-2 mb-[20px] md:mb-0 md:rounded-md rounded-full mx-auto md:mx-0 bg-blueprimary border-[3px] sm:border-[4px] md:border-none border-white overflow-hidden">
                            <img src="./images/banner-mobile.png" alt="banner" className="w-full inline-block" />
                        </div>

                        <div className="w-full md:w-8/12 md:mr-[30px] lg:mr-[40px] 2xl:mr-[60px] flex flex-col items-center md:items-start justify-center text-center md:text-left md:order-1">
                            <h3 className="text-xl sm:text-[22px] md:text-2xl md:mb-[2px] 2xl:mb-1 lg:text-[22px] xl:text-[28px] 2xl:text-[32px] 2xl:leading-[38px] xl:leading-[33px] lg:leading-[26px] sm:leading-[26px] text-blueprimary font-bold capitalize tracking-wide">Hi, i’m irpan ramdani</h3>
                            <span className="h-[30px] sm:h-[35px] md:h-10 xl:h-[49px] 2xl:h-14 w-auto text-[26px] leading-[30px] sm:text-3xl md:text-[34px] md:leading-[40px] xl:text-[42px] 2xl:text-5xl xl:leading-[49px] text-bluesecondary font-bold uppercase tracking-wide inline-block" ref={el}></span>
                            <p className="text-base xl:text-lg 2xl:text-[22px] 2xl:leading-[34px] text-bluesecondary tracking-wide mt-[15px] md:mt-[10px] 2xl:mt-5 mb-[30px] 2xl:mb-10">I am a final year student from Sangga Buana Ypkp University. Bandung city, majoring in informatics engineering and I am interested in web development especially as a front end developer. and currently I have experience in developing several website projects for companies</p>

                            <div className="flex flex-row items-center justify-center">
                                <a href="https://drive.google.com/file/d/1CMq85q5fGMlYic2B6o9IFHZw5ugnuKE8/view?usp=sharing" target="_blank" rel="noreferrer" className="w-[145px] lg:w-[135px] xl:w-[155px] 2xl:w-[165px] 2xl:h-[40px] 2xl:leading-[40px] h-[35px] text-base lg:text-sm xl:text-base 2xl:text-lg xl:leading-[35px] leading-[35px] lg:leading-[35px] font-medium md:text-center inline-block bg-blueprimary text-white rounded-[3px] hover:bg-yellow hover:text-white transition duration-150 ease-in">
                                    <svg className="inline-block mr-[5px] -mt-[2px] lg:-mt-[3px]" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 1.44444V11.5556C0 12.35 0.642778 13 1.44444 13H11.5556C12.35 13 13 12.35 13 11.5556V1.44444C13 0.65 12.35 0 11.5556 0H1.44444C0.642778 0 0 0.65 0 1.44444ZM8.66667 4.33333C8.66667 5.53222 7.69889 6.5 6.5 6.5C5.30111 6.5 4.33333 5.53222 4.33333 4.33333C4.33333 3.13444 5.30111 2.16667 6.5 2.16667C7.69889 2.16667 8.66667 3.13444 8.66667 4.33333ZM2.16667 10.1111C2.16667 8.66667 5.05556 7.87222 6.5 7.87222C7.94444 7.87222 10.8333 8.66667 10.8333 10.1111V10.8333H2.16667V10.1111Z" fill="white" />
                                    </svg>
                                    Download CV
                                </a>
                                <Link to="/message" onClick={refreshPage} className="ml-[25px] sm:ml-[30px] lg:ml-[25px] xl:ml-[30px] text-base lg:text-sm xl:text-base 2xl:text-lg text-bluesecondary hover:underline font-medium">
                                    Send Message
                                    <svg className="inline-block ml-[5px]" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5556 11.5556H1.44444V1.44444H6.5V0H1.44444C0.642778 0 0 0.65 0 1.44444V11.5556C0 12.35 0.642778 13 1.44444 13H11.5556C12.35 13 13 12.35 13 11.5556V6.5H11.5556V11.5556ZM7.94444 0V1.44444H10.5372L3.43778 8.54389L4.45611 9.56222L11.5556 2.46278V5.05556H13V0H7.94444Z" fill="#112B3C" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="w-10/12 sm:w-8/12 md:w-6/12 mt-[109px] md:mt-[100px] text-center lg:hidden">
                        <h3 className="text-lg text-bluesecondary font-medium">Get in touch</h3>

                        <div className="flex flex-row items-center justify-between mt-[15px]">
                            <a href="https://github.com/Irfanrmdni" target="_blank" rel="noreferrer">
                                <svg className="hover:scale-110 transition-all duration-150 ease-in" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 5.9375C0 2.65831 2.65831 0 5.9375 0H32.0625C35.3417 0 38 2.65831 38 5.9375V32.0625C38 35.3417 35.3417 38 32.0625 38H5.9375C2.65831 38 0 35.3417 0 32.0625V5.9375ZM9.5 19.199C9.5 13.9696 13.7416 9.728 18.9709 9.728C24.2003 9.728 28.4419 13.9696 28.5 19.199C28.5 23.3824 25.8272 26.9268 22.0504 28.2051C21.5856 28.2632 21.4113 27.9727 21.4113 27.7402V25.1256C21.4113 24.254 21.1208 23.673 20.7722 23.3824C22.8639 23.15 25.0719 22.3947 25.0719 18.7341C25.0719 17.6882 24.6651 16.8167 24.0841 16.1775C24.0887 16.1593 24.0951 16.1364 24.1027 16.109C24.1916 15.7881 24.4497 14.8569 23.9679 13.6791C23.9679 13.6791 23.1544 13.4467 21.3532 14.6668C20.5979 14.4925 19.7844 14.3763 18.9709 14.3763C18.1575 14.3763 17.3441 14.4344 16.5887 14.6668C14.7874 13.4467 13.974 13.6791 13.974 13.6791C13.4605 14.9344 13.7874 15.9095 13.8544 16.1093L13.8578 16.1194C13.2186 16.8167 12.87 17.6301 12.87 18.676C12.87 22.3366 15.078 23.15 17.1698 23.3824C16.9373 23.6149 16.6468 24.0216 16.5887 24.6607C16.0658 24.8931 14.7294 25.2999 13.8578 23.8473C13.8578 23.8473 13.3349 22.9176 12.4052 22.8595C12.4052 22.8595 11.4756 22.8595 12.3471 23.4405C12.3471 23.4405 12.9863 23.7311 13.3929 24.835C13.3929 24.835 13.974 26.6944 16.5887 26.1133V27.7402C16.5887 27.9727 16.4144 28.2632 15.9496 28.2051C12.2309 26.9268 9.5 23.3824 9.5 19.199Z" fill="#112B3C" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/irpan-ramdani" target="_blank" rel="noreferrer">
                                <svg className="hover:scale-110 transition-all duration-150 ease-in" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 5.9375C0 2.65831 2.65831 0 5.9375 0H32.0625C35.3417 0 38 2.65831 38 5.9375V32.0625C38 35.3417 35.3417 38 32.0625 38H5.9375C2.65831 38 0 35.3417 0 32.0625V5.9375ZM9.7375 15.7938V28.5H13.775V15.7938H9.7375ZM9.5 11.7563C9.5 13.0625 10.45 14.0125 11.7563 14.0125C13.0625 14.0125 14.0125 13.0625 14.0125 11.7563C14.0125 10.45 13.0625 9.5 11.7563 9.5C10.5688 9.5 9.5 10.45 9.5 11.7563ZM24.4625 28.5H28.2625V20.6625C28.2625 16.7437 25.8875 15.4375 23.6312 15.4375C21.6125 15.4375 20.1875 16.7437 19.8312 17.575V15.7938H16.0312V28.5H20.0687V21.7313C20.0687 19.95 21.2562 19 22.4437 19C23.6312 19 24.4625 19.5938 24.4625 21.6125V28.5Z" fill="#112B3C" />
                                </svg>
                            </a>
                            <a href="https://www.youtube.com/channel/UC5irpR1B_N226lllBqjNM-w" target="_blank" rel="noreferrer">
                                <svg className="hover:scale-110 transition-all duration-150 ease-in" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.0875 19L17.1 16.15V21.85L22.0875 19Z" fill="#112B3C" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 5.9375C0 2.65831 2.65831 0 5.9375 0H32.0625C35.3417 0 38 2.65831 38 5.9375V32.0625C38 35.3417 35.3417 38 32.0625 38H5.9375C2.65831 38 0 35.3417 0 32.0625V5.9375ZM26.3625 12.7063C27.1938 12.9438 27.7875 13.5375 28.025 14.3688C28.5 15.9125 28.5 19 28.5 19C28.5 19 28.5 22.0875 28.1438 23.6313C27.9063 24.4625 27.3125 25.0562 26.4812 25.2938C24.9375 25.65 19 25.65 19 25.65C19 25.65 12.9437 25.65 11.5187 25.2938C10.6875 25.0562 10.0938 24.4625 9.85625 23.6313C9.5 22.0875 9.5 19 9.5 19C9.5 19 9.5 15.9125 9.7375 14.3688C9.975 13.5375 10.5688 12.9438 11.4 12.7063C12.9438 12.35 18.8812 12.35 18.8812 12.35C18.8812 12.35 24.9375 12.35 26.3625 12.7063Z" fill="#112B3C" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/jingporamdani/?hl=id" target="_blank" rel="noreferrer">
                                <svg className="hover:scale-110 transition-all duration-150 ease-in" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 22.325C17.2188 22.325 15.675 20.9 15.675 19C15.675 17.2187 17.1 15.675 19 15.675C20.7812 15.675 22.325 17.1 22.325 19C22.325 20.7812 20.7812 22.325 19 22.325Z" fill="#112B3C" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M23.0375 10.925H14.9625C14.0125 11.0437 13.5375 11.1625 13.1813 11.2812C12.7063 11.4 12.35 11.6375 11.9938 11.9937C11.7119 12.2756 11.5787 12.5575 11.4177 12.8983C11.3752 12.9881 11.3308 13.0822 11.2812 13.1812C11.2629 13.2364 11.2417 13.2943 11.2189 13.3564C11.0947 13.6958 10.925 14.1595 10.925 14.9625V23.0375C11.0438 23.9875 11.1625 24.4625 11.2812 24.8187C11.4 25.2937 11.6375 25.65 11.9938 26.0062C12.2756 26.2881 12.5575 26.4213 12.8983 26.5823C12.9881 26.6248 13.0821 26.6692 13.1813 26.7187C13.2364 26.7371 13.2943 26.7583 13.3564 26.7811C13.6958 26.9053 14.1595 27.075 14.9625 27.075H23.0375C23.9875 26.9562 24.4625 26.8375 24.8187 26.7187C25.2937 26.6 25.65 26.3625 26.0062 26.0062C26.2881 25.7244 26.4213 25.4425 26.5823 25.1017C26.6248 25.0119 26.6692 24.9179 26.7188 24.8187C26.7371 24.7636 26.7583 24.7057 26.7811 24.6436C26.9053 24.3042 27.075 23.8405 27.075 23.0375V14.9625C26.9562 14.0125 26.8375 13.5375 26.7188 13.1812C26.6 12.7062 26.3625 12.35 26.0062 11.9937C25.7244 11.7119 25.4425 11.5787 25.1017 11.4177C25.012 11.3753 24.9177 11.3307 24.8187 11.2812C24.7636 11.2629 24.7057 11.2417 24.6436 11.2189C24.3042 11.0947 23.8405 10.925 23.0375 10.925ZM19 13.8937C16.15 13.8937 13.8937 16.15 13.8937 19C13.8937 21.85 16.15 24.1062 19 24.1062C21.85 24.1062 24.1062 21.85 24.1062 19C24.1062 16.15 21.85 13.8937 19 13.8937ZM25.4125 13.775C25.4125 14.4308 24.8808 14.9625 24.225 14.9625C23.5692 14.9625 23.0375 14.4308 23.0375 13.775C23.0375 13.1192 23.5692 12.5875 24.225 12.5875C24.8808 12.5875 25.4125 13.1192 25.4125 13.775Z" fill="#112B3C" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 5.9375C0 2.65831 2.65831 0 5.9375 0H32.0625C35.3417 0 38 2.65831 38 5.9375V32.0625C38 35.3417 35.3417 38 32.0625 38H5.9375C2.65831 38 0 35.3417 0 32.0625V5.9375ZM14.9625 9.14375H23.0375C24.1062 9.2625 24.8187 9.38125 25.4125 9.61875C26.125 9.975 26.6 10.2125 27.1937 10.8062C27.7875 11.4 28.1438 11.9937 28.3813 12.5875C28.6188 13.1812 28.8562 13.8937 28.8562 14.9625V23.0375C28.7375 24.1062 28.6188 24.8187 28.3813 25.4125C28.025 26.125 27.7875 26.6 27.1937 27.1937C26.6 27.7875 26.0062 28.1437 25.4125 28.3812C24.8187 28.6187 24.1062 28.8562 23.0375 28.8562H14.9625C13.8938 28.7375 13.1813 28.6187 12.5875 28.3812C11.875 28.025 11.4 27.7875 10.8063 27.1937C10.2125 26.6 9.85625 26.0062 9.61875 25.4125C9.38125 24.8187 9.14375 24.1062 9.14375 23.0375V14.9625C9.2625 13.8937 9.38125 13.1812 9.61875 12.5875C9.975 11.875 10.2125 11.4 10.8063 10.8062C11.4 10.2125 11.9938 9.85625 12.5875 9.61875C13.1813 9.38125 13.8938 9.14375 14.9625 9.14375Z" fill="#112B3C" />
                                </svg>
                            </a>
                            <a href="https://wa.me/6289677451818" target="_blank" rel="noreferrer">
                                <svg className="hover:scale-110 transition-all duration-150 ease-in" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M14.9625 25.7687C16.15 26.4813 17.575 26.8375 19 26.8375C23.3937 26.8375 26.8375 23.275 26.8375 19.1187C26.8375 16.9813 26.125 15.0812 24.5813 13.5375C23.0375 12.1125 21.1375 11.2812 19 11.2812C14.725 11.2812 11.1625 14.8438 11.1625 19.1187C11.1625 20.5438 11.5187 21.9688 12.35 23.275L12.5875 23.6313L11.7562 26.4813L14.725 25.65L14.9625 25.7687ZM21.6125 20.1875C21.85 20.1875 23.0375 20.7812 23.275 20.9C23.312 20.9185 23.349 20.9341 23.3855 20.9495C23.5836 21.0331 23.7685 21.1112 23.8688 21.6125C23.9875 21.6125 23.9875 22.0875 23.75 22.6812C23.6313 23.1562 22.6813 23.75 22.2063 23.75C22.1258 23.75 22.0487 23.7568 21.9664 23.7641C21.5628 23.7998 21.033 23.8467 19.3562 23.1562C17.2752 22.3238 15.8324 20.3061 15.4272 19.7396C15.37 19.6595 15.3334 19.6084 15.3187 19.5938C15.2985 19.5533 15.2576 19.4888 15.2037 19.4037C14.941 18.9889 14.3688 18.0853 14.3688 17.1C14.3688 15.9125 14.9625 15.3188 15.2 15.0812C15.4375 14.8438 15.675 14.8438 15.7937 14.8438H16.2688C16.3875 14.8438 16.625 14.8438 16.7438 15.2C16.9813 15.675 17.4563 16.8625 17.4563 16.9813C17.4563 17.0208 17.4695 17.0604 17.4826 17.1C17.509 17.1792 17.5354 17.2583 17.4563 17.3375C17.3969 17.3969 17.3672 17.4562 17.3375 17.5156C17.3078 17.575 17.2781 17.6344 17.2188 17.6938L16.8625 18.05C16.7438 18.1688 16.625 18.2875 16.7438 18.525C16.8625 18.7625 17.3375 19.5938 18.05 20.1875C18.8517 20.889 19.4842 21.1676 19.8049 21.3089C19.8643 21.335 19.9129 21.3565 19.95 21.375C20.1875 21.375 20.3063 21.375 20.425 21.2563C20.4844 21.1375 20.6328 20.9594 20.7812 20.7812C20.9297 20.6031 21.0781 20.425 21.1375 20.3062C21.2562 20.0688 21.375 20.0688 21.6125 20.1875Z" fill="#112B3C" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 5.9375C0 2.65831 2.65831 0 5.9375 0H32.0625C35.3417 0 38 2.65831 38 5.9375V32.0625C38 35.3417 35.3417 38 32.0625 38H5.9375C2.65831 38 0 35.3417 0 32.0625V5.9375ZM19 9.5C21.4937 9.5 23.8688 10.45 25.65 12.2313C27.4313 14.0125 28.5 16.3875 28.5 18.8813C28.5 24.1063 24.225 28.3813 19 28.3813C17.4562 28.3813 15.9125 27.9062 14.4875 27.1938L9.5 28.5L10.8063 23.75C9.97501 22.325 9.5 20.6625 9.5 19C9.5 13.775 13.775 9.5 19 9.5Z" fill="#112B3C" />
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>
            </Container>
        </>
    )
}

export default Header;