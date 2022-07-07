import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../../components/Container';
import Title from '../../../components/Title';


function Portfolio() {
    function refreshPage() {
        setTimeout(() => {
            window.location.reload(false);
        }, 500);
    }

    return (
        <>
            {/* PORTFOLIO */}
            <Container variant="white" id="portfolio">
                <Title>portfolio</Title>

                <div className="w-full mt-[25px] mb-[20px] flex flex-row items-center justify-between">
                    <h5 className="text-xl md:text-[22px] lg:text-xl xl:text-2xl 2xl:text-[28px] 2xl:leading-[33px] md:leading-[26px] text-bluesecondary font-medium">Recent Work</h5>
                    <Link to="/portfolio" onClick={refreshPage} className="text-base 2xl:text-lg md:font-medium font-normal hover:underline text-bluesecondary">
                        See More
                        <svg className="inline-block ml-1 2xl:w-2" width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 9.884L4.32659 5.6L0 1.316L1.33198 0L7 5.6L1.33198 11.2L0 9.884Z" fill="#112B3C" />
                        </svg>
                    </Link>
                </div>

                <div className="w-full flex md:flex-wrap flex-col md:flex-row items-center justify-center md:justify-between">
                    <div className="w-full md:w-6/12 mb-[30px] md:pr-4 xl:pr-6 2xl:pr-8">
                        <div className="w-full relative bg-blueprimary px-20 py-8 flex rounded overflow-hidden cursor-pointer item-portfolio">
                            <img src="./images/crosson.png" alt="crosson" className="w-full inline-block m-auto" />
                            <a href="https://crosson.netlify.app" rel="noreferrer" target="_blank" className="absolute top-0 left-0 right-0 bottom-0 m-[4%] rounded opacity-0 transition-all duration-150 ease-in" style={{ background: 'rgba(243,202,32,.65)' }}>
                                <img src="./images/eye.svg" alt="eye" className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-block w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] opacity-100" />
                            </a>
                        </div>

                        <h3 className="text-lg lg:text-base xl:text-lg 2xl:text-[22px] 2xl:leading-[26px] text-bluesecondary mt-[17px] mb-1">Crosson - Web</h3>

                        <div className="flex flex-row items-center justify-between">
                            <p className="text-sm 2xl:text-base text-blueprimary">Html, Tailwindcss, Reactjs</p>
                            <a href="https://crosson.netlify.app" rel="noreferrer" target="_blank" className="text-sm 2xl:text-base text-blueprimary hover:underline">
                                <svg className="inline-block mr-[5px]" width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.52 4C1.52 2.632 2.632 1.52 4 1.52L7.2 1.52V0L4 0C1.792 0 0 1.792 0 4C0 6.208 1.792 8 4 8H7.2V6.48H4C2.632 6.48 1.52 5.368 1.52 4ZM4.8 4.8L11.2 4.8V3.2H4.8V4.8ZM12 0L8.8 0V1.52L12 1.52C13.368 1.52 14.48 2.632 14.48 4C14.48 5.368 13.368 6.48 12 6.48H8.8V8H12C14.208 8 16 6.208 16 4C16 1.792 14.208 0 12 0Z" fill="#2666CF" />
                                </svg>
                                Visit website
                            </a>
                        </div>
                    </div>

                    <div className="w-full md:w-6/12 mb-[30px] md:pl-4 xl:pl-6 2xl:pl-8">
                        <div className="w-full relative bg-blueprimary px-20 py-8 flex rounded overflow-hidden cursor-pointer item-portfolio">
                            <img src="./images/trafalgar.png" alt="trafalgar" className="w-full inline-block m-auto" />
                            <a href="https://trafalgar-webpage.netlify.app/" rel="noreferrer" target="_blank" className="absolute top-0 left-0 right-0 bottom-0 m-[4%] rounded opacity-0 transition-all duration-150 ease-in" style={{ background: 'rgba(243,202,32,.65)' }}>
                                <img src="./images/eye.svg" alt="eye" className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-block w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] opacity-100" />
                            </a>
                        </div>

                        <h3 className="text-lg lg:text-base xl:text-lg 2xl:text-[22px] 2xl:leading-[26px] text-bluesecondary mt-[17px] mb-1">Trafalgar - Landing Page (Responsive)</h3>

                        <div className="flex flex-row items-center justify-between">
                            <p className="text-sm 2xl:text-base text-blueprimary">Html, Css, Javascript</p>
                            <a href="https://trafalgar-webpage.netlify.app/" target="_blank" rel="noreferrer" className="text-sm 2xl:text-base text-blueprimary hover:underline">
                                <svg className="inline-block mr-[5px]" width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.52 4C1.52 2.632 2.632 1.52 4 1.52L7.2 1.52V0L4 0C1.792 0 0 1.792 0 4C0 6.208 1.792 8 4 8H7.2V6.48H4C2.632 6.48 1.52 5.368 1.52 4ZM4.8 4.8L11.2 4.8V3.2H4.8V4.8ZM12 0L8.8 0V1.52L12 1.52C13.368 1.52 14.48 2.632 14.48 4C14.48 5.368 13.368 6.48 12 6.48H8.8V8H12C14.208 8 16 6.208 16 4C16 1.792 14.208 0 12 0Z" fill="#2666CF" />
                                </svg>
                                Visit website
                            </a>
                        </div>
                    </div>

                    <div className="w-full md:w-6/12 mb-[30px] md:mb-0 md:pr-4 xl:pr-6 2xl:pr-8">
                        <div className="w-full relative bg-blueprimary px-20 py-8 flex rounded overflow-hidden cursor-pointer item-portfolio">
                            <img src="./images/luxspace.png" alt="luxspace" className="w-full inline-block m-auto" />
                            <a href="https://luxspace-bwa.netlify.app/" rel="noreferrer" target="_blank" className="absolute top-0 left-0 right-0 bottom-0 m-[4%] rounded opacity-0 transition-all duration-150 ease-in" style={{ background: 'rgba(243,202,32,.65)' }}>
                                <img src="./images/eye.svg" alt="eye" className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-block w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] opacity-100" />
                            </a>
                        </div>

                        <h3 className="text-lg lg:text-base xl:text-lg 2xl:text-[22px] 2xl:leading-[26px] text-bluesecondary mt-[17px] mb-1">Luxspace - Web (Responsive)</h3>

                        <div className="flex flex-row items-center justify-between">
                            <p className="text-sm 2xl:text-base text-blueprimary">Html, Tailwindcss, Reactjs</p>
                            <a href="https://luxspace-bwa.netlify.app/" target="_blank" rel="noreferrer" className="text-sm 2xl:text-base text-blueprimary hover:underline">
                                <svg className="inline-block mr-[5px]" width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.52 4C1.52 2.632 2.632 1.52 4 1.52L7.2 1.52V0L4 0C1.792 0 0 1.792 0 4C0 6.208 1.792 8 4 8H7.2V6.48H4C2.632 6.48 1.52 5.368 1.52 4ZM4.8 4.8L11.2 4.8V3.2H4.8V4.8ZM12 0L8.8 0V1.52L12 1.52C13.368 1.52 14.48 2.632 14.48 4C14.48 5.368 13.368 6.48 12 6.48H8.8V8H12C14.208 8 16 6.208 16 4C16 1.792 14.208 0 12 0Z" fill="#2666CF" />
                                </svg>
                                Visit website
                            </a>
                        </div>
                    </div>

                    <div className="w-full md:w-6/12 md:pl-4 xl:pl-6 2xl:pl-8">
                        <div className="w-full relative bg-blueprimary px-20 py-8 flex rounded overflow-hidden cursor-pointer item-portfolio">
                            <img src="./images/epictetus.png" alt="epictetus" className="w-full inline-block m-auto" />
                            <a href="https://epictetuse.netlify.app/" rel="noreferrer" target="_blank" className="absolute top-0 left-0 right-0 bottom-0 m-[4%] rounded opacity-0 transition-all duration-150 ease-in" style={{ background: 'rgba(243,202,32,.65)' }}>
                                <img src="./images/eye.svg" alt="eye" className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-block w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] opacity-100" />
                            </a>
                        </div>

                        <h3 className="text-lg lg:text-base xl:text-lg 2xl:text-[22px] 2xl:leading-[26px] text-bluesecondary mt-[17px] mb-1">Epictetus - Web (Responsive)</h3>

                        <div className="flex flex-row items-center justify-between">
                            <p className="text-sm 2xl:text-base text-blueprimary">Html, Tailwindcss, Nextjs</p>
                            <a href="https://epictetuse.netlify.app/" target="_blank" rel="noreferrer" className="text-sm 2xl:text-base text-blueprimary hover:underline">
                                <svg className="inline-block mr-[5px]" width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.52 4C1.52 2.632 2.632 1.52 4 1.52L7.2 1.52V0L4 0C1.792 0 0 1.792 0 4C0 6.208 1.792 8 4 8H7.2V6.48H4C2.632 6.48 1.52 5.368 1.52 4ZM4.8 4.8L11.2 4.8V3.2H4.8V4.8ZM12 0L8.8 0V1.52L12 1.52C13.368 1.52 14.48 2.632 14.48 4C14.48 5.368 13.368 6.48 12 6.48H8.8V8H12C14.208 8 16 6.208 16 4C16 1.792 14.208 0 12 0Z" fill="#2666CF" />
                                </svg>
                                Visit website
                            </a>
                        </div>
                    </div>
                </div>

                {/* HIRE ME */}
                <section className="w-full p-[34px] md:p-[45px] xl:py-14 mt-16 rounded bg-bluesecondary">
                    <div className="w-full text-center m-auto">
                        <h3 className="text-[22px] md:text-[26px] xl:text-[28px] 2xl:text-[32px] 2xl:leading-[38px] xl:leading-[33px] leading-[26px] md:leading-[30px] text-blueprimary font-bold">HIRE ME FOR YOUR PROJECT</h3>
                        <p className="text-sm md:text-base xl:text-lg 2xl:text-[22px] 2xl:leading-[26px] text-white capitalize tracking-wide mt-[5px] mb-[25px]">I am available for freelance projects. hire me and get your project done</p>

                        <a href="https://api.whatsapp.com/send/?phone=%2B6289677451818&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" className="w-[145px] lg:w-[135px] xl:w-[155px] 2xl:w-[165px] 2xl:h-[40px] 2xl:leading-[40px] 2xl:text-lg h-[35px] text-base font-medium leading-[35px] inline-block bg-blueprimary hover:bg-yellow transition duration-150 ease-in text-white rounded-[3px] xl:rounded">
                            Hire me
                            <svg className="inline-block ml-1 mt-[2px] lg:mt-0" width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 9.884L4.32659 5.6L0 1.316L1.33198 0L7 5.6L1.33198 11.2L0 9.884Z" fill="white" />
                            </svg>
                        </a>
                    </div>
                </section>
            </Container>
        </>
    )
}

export default Portfolio;