import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const time = new Date().getFullYear();

    return (
        <>
            {/* NAVBAR MOBILE */}
            <nav className="w-full overflow-hidden">
                {/* TOP BAR */}
                <div className="fixed top-0 left-0 right-0 h-[45px] sm:h-[50px] md:h-[65px] px-[10px] sm:px-[15px] md:px-5 bg-bluesecondary flex flex-row justify-between items-center z-50 lg:hidden">
                    <Link to="/" className="text-sm sm:text-base md:text-lg font-bold uppercase text-white">irpan ramdani</Link>

                    {toggleMenu === false ? (<button type="submit" onClick={() => setToggleMenu(true)}>
                        <svg className="w-[24px] sm:w-[25px] h-[24px] sm:h-[25px] md:w-[30px] md:h-[30px]" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 6.25H6.25V0H0V6.25ZM9.375 25H15.625V18.75H9.375V25ZM0 25H6.25V18.75H0V25ZM0 15.625H6.25V9.375H0V15.625ZM9.375 15.625H15.625V9.375H9.375V15.625ZM18.75 0V6.25H25V0H18.75ZM9.375 6.25H15.625V0H9.375V6.25ZM18.75 15.625H25V9.375H18.75V15.625ZM18.75 25H25V18.75H18.75V25Z" fill="white" />
                        </svg>
                    </button>) : (<button type="submit" onClick={() => setToggleMenu(false)}>
                        <svg className="w-[24px] sm:w-[25px] h-[24px] sm:h-[25px] md:w-[30px] md:h-[30px]" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 2.51786L22.4821 0L12.5 9.98214L2.51786 0L0 2.51786L9.98214 12.5L0 22.4821L2.51786 25L12.5 15.0179L22.4821 25L25 22.4821L15.0179 12.5L25 2.51786Z" fill="white" />
                        </svg>
                    </button>)}
                </div>
            </nav>

            {/* Nav Link */}
            <div className={`w-full h-screen flex fixed z-40 left-0 bg-blueprimary transition-all ease-in duration-300 opacity-0 ${toggleMenu === true ? 'top-0 opacity-100' : '-top-full'}`}>
                <ul className="w-full m-auto text-center">
                    <li><a href="/#home" onClick={() => setToggleMenu(!toggleMenu)} className="w-6/12 sm:w-4/12 md:w-3/12 py-[2px] text-2xl md:text-[28px] md:leading-[33px] text-white font-bold tracking-wide uppercase mb-[50px] inline-block hover:bg-yellow hover:text-bluesecondary hover:shadow-md rounded transition duration-150 ease-in">home</a></li>
                    <li><a href="/#about" onClick={() => setToggleMenu(!toggleMenu)} className="w-6/12 sm:w-4/12 md:w-3/12 py-[2px] text-2xl md:text-[28px] md:leading-[33px] text-white font-bold tracking-wide uppercase mb-[50px] inline-block hover:bg-yellow hover:text-bluesecondary hover:shadow-md rounded transition duration-150 ease-in">about me</a></li>
                    <li><a href="/#portfolio" onClick={() => setToggleMenu(!toggleMenu)} className="w-6/12 sm:w-4/12 md:w-3/12 py-[2px] text-2xl md:text-[28px] md:leading-[33px] text-white font-bold tracking-wide uppercase mb-[50px] inline-block hover:bg-yellow hover:text-bluesecondary hover:shadow-md rounded transition duration-150 ease-in">portfolio</a></li>
                    <li><a href="/#contact" onClick={() => setToggleMenu(!toggleMenu)} className="w-6/12 sm:w-4/12 md:w-3/12 py-[2px] text-2xl md:text-[28px] md:leading-[33px] text-white font-bold tracking-wide uppercase inline-block hover:bg-yellow hover:text-bluesecondary hover:shadow-md rounded transition duration-150 ease-in">contact</a></li>
                </ul>
            </div>

            {/* NAVBAR DESKTOP */}
            <nav className="navbar-desktop fixed w-[20%] h-screen flex float-left px-5 xl:px-8 2xl:px-[50px] text-center bg-blueprimary lg:block md:hidden sm:hidden z-50">
                <div className="w-full relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-7/12 h-7/12 rounded-full overflow-hidden border-2 xl:border-[3px] mx-auto border-white bg-gray">
                        <img src="./images/irfan.png" alt="irfan" className="w-full" />
                    </div>

                    <Link to="/" className="inline-block mx-auto py-[3px] px-3 xl:px-[14px] 2xl:px-[18px] rounded mt-[15px] text-xs xl:text-sm 2xl:text-base text-white text-center font-bold bg-bluesecondary uppercase">irpan ramdani</Link>

                    <ul className="mx-auto my-[50px]">
                        <li><a href="/#home" className="w-9/12 py-[2px] inline-block uppercase text-lg xl:text-xl 2xl:text-2xl text-white font-bold tracking-wide mb-[26px] hover:bg-yellow hover:text-bluesecondary hover:shadow-md rounded transition duration-150 ease-in">home</a></li>
                        <li><a href="/#about" className="w-9/12 py-[2px] inline-block uppercase text-lg xl:text-xl 2xl:text-2xl text-white font-bold tracking-wide mb-[26px] hover:bg-yellow hover:text-bluesecondary hover:shadow-md rounded transition duration-150 ease-in">about me</a></li>
                        <li><a href="/#portfolio" className="w-9/12 py-[2px] inline-block uppercase text-lg xl:text-xl 2xl:text-2xl text-white font-bold tracking-wide mb-[26px] hover:bg-yellow hover:text-bluesecondary hover:shadow-md rounded transition duration-150 ease-in">portfolio</a></li>
                        <li><a href="/#contact" className="w-9/12 py-[2px] inline-block uppercase text-lg xl:text-xl 2xl:text-2xl text-white font-bold tracking-wide hover:bg-yellow hover:text-bluesecondary hover:shadow-md rounded transition duration-150 ease-in">contact</a></li>
                    </ul>

                    <div className="w-full flex flex-row justify-between items-center">
                        <a href="https://github.com/Irfanrmdni" target="_blank" rel="noreferrer">
                            <svg className="xl:w-7 xl:h-7 2xl:w-[30px] 2xl:h-[30px] hover:scale-125 transition-all duration-150 ease-in" width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 3.125C0 1.39911 1.39911 0 3.125 0H16.875C18.6009 0 20 1.39911 20 3.125V16.875C20 18.6009 18.6009 20 16.875 20H3.125C1.39911 20 0 18.6009 0 16.875V3.125ZM5 10.1047C5 7.35242 7.2324 5.12 9.9847 5.12C12.737 5.12 14.9694 7.35242 15 10.1047C15 12.3065 13.5933 14.172 11.6055 14.8448C11.3609 14.8754 11.2691 14.7224 11.2691 14.6001V13.224C11.2691 12.7653 11.1162 12.4594 10.9327 12.3065C12.0337 12.1842 13.1957 11.7867 13.1957 9.86006C13.1957 9.3096 12.9816 8.85089 12.6759 8.5145C12.6783 8.50489 12.6816 8.49283 12.6856 8.47843C12.7324 8.30955 12.8683 7.81945 12.6147 7.19951C12.6147 7.19951 12.1865 7.07719 11.2385 7.71939C10.841 7.62765 10.4128 7.56648 9.9847 7.56648C9.55658 7.56648 9.12846 7.59706 8.73089 7.71939C7.78286 7.07719 7.35474 7.19951 7.35474 7.19951C7.08447 7.8602 7.25655 8.37343 7.29179 8.47855L7.29359 8.48392C6.95717 8.85089 6.77368 9.27902 6.77368 9.82948C6.77368 11.7561 7.93579 12.1842 9.03671 12.3065C8.91438 12.4289 8.76148 12.6429 8.73089 12.9793C8.45566 13.1017 7.7523 13.3157 7.29359 12.5512C7.29359 12.5512 7.01836 12.0619 6.52905 12.0313C6.52905 12.0313 6.03977 12.0313 6.49849 12.3371C6.49849 12.3371 6.83487 12.49 7.04891 13.0711C7.04891 13.0711 7.35474 14.0497 8.73089 13.7439V14.6001C8.73089 14.7224 8.63914 14.8754 8.39451 14.8448C6.4373 14.172 5 12.3065 5 10.1047Z" fill="white" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/irpan-ramdani" target="_blank" rel="noreferrer">
                            <svg className="xl:w-7 xl:h-7 2xl:w-[30px] 2xl:h-[30px] hover:scale-125 transition-all duration-150 ease-in" width="24" height="24" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 3.22917C0 1.44575 1.39911 0 3.125 0H16.875C18.6009 0 20 1.44575 20 3.22917V17.4375C20 19.2209 18.6009 20.6667 16.875 20.6667H3.125C1.39911 20.6667 0 19.2209 0 17.4375V3.22917ZM5.125 8.58959V15.5H7.25V8.58959H5.125ZM5 6.39375C5 7.10417 5.5 7.62084 6.1875 7.62084C6.875 7.62084 7.375 7.10417 7.375 6.39375C7.375 5.68334 6.875 5.16667 6.1875 5.16667C5.5625 5.16667 5 5.68334 5 6.39375ZM12.875 15.5H14.875V11.2375C14.875 9.10625 13.625 8.39583 12.4375 8.39583C11.375 8.39583 10.625 9.10625 10.4375 9.55834V8.58959H8.4375V15.5H10.5625V11.8188C10.5625 10.85 11.1875 10.3333 11.8125 10.3333C12.4375 10.3333 12.875 10.6562 12.875 11.7542V15.5Z" fill="white" />
                            </svg>
                        </a>
                        <a href="https://www.youtube.com/channel/UC5irpR1B_N226lllBqjNM-w" target="_blank" rel="noreferrer">
                            <svg className="xl:w-7 xl:h-7 2xl:w-[30px] 2xl:h-[30px] hover:scale-125 transition-all duration-150 ease-in" width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.625 10L9 8.5V11.5L11.625 10Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 3.125C0 1.39911 1.39911 0 3.125 0H16.875C18.6009 0 20 1.39911 20 3.125V16.875C20 18.6009 18.6009 20 16.875 20H3.125C1.39911 20 0 18.6009 0 16.875V3.125ZM13.875 6.6875C14.3125 6.8125 14.625 7.125 14.75 7.5625C15 8.375 15 10 15 10C15 10 15 11.625 14.8125 12.4375C14.6875 12.875 14.375 13.1875 13.9375 13.3125C13.125 13.5 10 13.5 10 13.5C10 13.5 6.8125 13.5 6.0625 13.3125C5.625 13.1875 5.3125 12.875 5.1875 12.4375C5 11.625 5 10 5 10C5 10 5 8.375 5.125 7.5625C5.25 7.125 5.5625 6.8125 6 6.6875C6.8125 6.5 9.9375 6.5 9.9375 6.5C9.9375 6.5 13.125 6.5 13.875 6.6875Z" fill="white" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/jingporamdani/?hl=id" target="_blank" rel="noreferrer">
                            <svg className="xl:w-7 xl:h-7 2xl:w-[30px] 2xl:h-[30px] hover:scale-125 transition-all duration-150 ease-in" width="24" height="24" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 12.1417C9.0625 12.1417 8.25 11.3667 8.25 10.3333C8.25 9.36458 9 8.525 10 8.525C10.9375 8.525 11.75 9.3 11.75 10.3333C11.75 11.3021 10.9375 12.1417 10 12.1417Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.125 5.94166H7.875C7.375 6.00625 7.125 6.07083 6.9375 6.13541C6.6875 6.2 6.5 6.32916 6.3125 6.52291C6.16413 6.67623 6.09403 6.82954 6.0093 7.01485C5.98697 7.06369 5.96356 7.11488 5.9375 7.16875C5.92783 7.19872 5.91667 7.23024 5.9047 7.26402C5.83932 7.44861 5.75 7.70076 5.75 8.1375V12.5292C5.8125 13.0458 5.875 13.3042 5.9375 13.4979C6 13.7562 6.125 13.95 6.3125 14.1437C6.46087 14.2971 6.60923 14.3695 6.78857 14.4571C6.83587 14.4801 6.88532 14.5043 6.9375 14.5312C6.96651 14.5412 6.99701 14.5528 7.0297 14.5651C7.20833 14.6327 7.45235 14.725 7.875 14.725H12.125C12.625 14.6604 12.875 14.5958 13.0625 14.5312C13.3125 14.4667 13.5 14.3375 13.6875 14.1437C13.8359 13.9904 13.906 13.8371 13.9907 13.6518C14.013 13.6029 14.0364 13.5518 14.0625 13.4979C14.0722 13.4679 14.0833 13.4364 14.0953 13.4026C14.1607 13.2181 14.25 12.9659 14.25 12.5292V8.1375C14.1875 7.62083 14.125 7.3625 14.0625 7.16875C14 6.91042 13.875 6.71666 13.6875 6.52291C13.5391 6.3696 13.3908 6.29717 13.2114 6.20961C13.1642 6.18655 13.1146 6.16233 13.0625 6.13541C13.0335 6.12542 13.003 6.11389 12.9703 6.10152C12.7917 6.03396 12.5477 5.94166 12.125 5.94166ZM10 7.55625C8.5 7.55625 7.3125 8.78333 7.3125 10.3333C7.3125 11.8833 8.5 13.1104 10 13.1104C11.5 13.1104 12.6875 11.8833 12.6875 10.3333C12.6875 8.78333 11.5 7.55625 10 7.55625ZM13.375 7.49166C13.375 7.84835 13.0952 8.1375 12.75 8.1375C12.4048 8.1375 12.125 7.84835 12.125 7.49166C12.125 7.13498 12.4048 6.84583 12.75 6.84583C13.0952 6.84583 13.375 7.13498 13.375 7.49166Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 3.22917C0 1.44575 1.39911 0 3.125 0H16.875C18.6009 0 20 1.44575 20 3.22917V17.4375C20 19.2209 18.6009 20.6667 16.875 20.6667H3.125C1.39911 20.6667 0 19.2209 0 17.4375V3.22917ZM7.875 4.97291H12.125C12.6875 5.0375 13.0625 5.10208 13.375 5.23125C13.75 5.425 14 5.55416 14.3125 5.87708C14.625 6.2 14.8125 6.52291 14.9375 6.84583C15.0625 7.16875 15.1875 7.55625 15.1875 8.1375V12.5292C15.125 13.1104 15.0625 13.4979 14.9375 13.8208C14.75 14.2083 14.625 14.4667 14.3125 14.7896C14 15.1125 13.6875 15.3062 13.375 15.4354C13.0625 15.5646 12.6875 15.6937 12.125 15.6937H7.875C7.3125 15.6292 6.9375 15.5646 6.625 15.4354C6.25 15.2417 6 15.1125 5.6875 14.7896C5.375 14.4667 5.1875 14.1437 5.0625 13.8208C4.9375 13.4979 4.8125 13.1104 4.8125 12.5292V8.1375C4.875 7.55625 4.9375 7.16875 5.0625 6.84583C5.25 6.45833 5.375 6.2 5.6875 5.87708C6 5.55416 6.3125 5.36041 6.625 5.23125C6.9375 5.10208 7.3125 4.97291 7.875 4.97291Z" fill="white" />
                            </svg>
                        </a>
                        <a href="https://wa.me/6289677451818" target="_blank" rel="noreferrer">
                            <svg className="xl:w-7 xl:h-7 2xl:w-[30px] 2xl:h-[30px] hover:scale-125 transition-all duration-150 ease-in" width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.875 13.5625C8.5 13.9375 9.25 14.125 10 14.125C12.3125 14.125 14.125 12.25 14.125 10.0625C14.125 8.9375 13.75 7.9375 12.9375 7.125C12.125 6.375 11.125 5.9375 10 5.9375C7.75 5.9375 5.875 7.8125 5.875 10.0625C5.875 10.8125 6.0625 11.5625 6.5 12.25L6.625 12.4375L6.1875 13.9375L7.75 13.5L7.875 13.5625ZM11.375 10.625C11.5 10.625 12.125 10.9375 12.25 11C12.2695 11.0097 12.2889 11.0179 12.3082 11.0261C12.4124 11.0701 12.5097 11.1112 12.5625 11.375C12.625 11.375 12.625 11.625 12.5 11.9375C12.4375 12.1875 11.9375 12.5 11.6875 12.5C11.6452 12.5 11.6046 12.5036 11.5613 12.5074C11.3489 12.5262 11.07 12.5509 10.1875 12.1875C9.0922 11.7494 8.33282 10.6874 8.11958 10.3892C8.08946 10.3471 8.07023 10.3202 8.0625 10.3125C8.05185 10.2912 8.03034 10.2573 8.00197 10.2125C7.8637 9.99414 7.5625 9.51859 7.5625 9C7.5625 8.375 7.87499 8.0625 7.99999 7.9375C8.12499 7.8125 8.24999 7.8125 8.31249 7.8125H8.56251C8.62501 7.8125 8.75 7.8125 8.8125 8C8.9375 8.25 9.18751 8.875 9.18751 8.9375C9.18751 8.95833 9.19445 8.97917 9.20139 9C9.21528 9.04167 9.22917 9.08333 9.18751 9.125C9.15626 9.15625 9.14063 9.1875 9.125 9.21875C9.10938 9.25 9.09375 9.28125 9.0625 9.3125L8.87501 9.5C8.81251 9.5625 8.75 9.625 8.8125 9.75C8.875 9.875 9.12501 10.3125 9.50001 10.625C9.92195 10.9942 10.2549 11.1409 10.4237 11.2152C10.4549 11.229 10.4805 11.2402 10.5 11.25C10.625 11.25 10.6875 11.25 10.75 11.1875C10.7813 11.125 10.8594 11.0313 10.9375 10.9375C11.0156 10.8437 11.0937 10.75 11.125 10.6875C11.1875 10.5625 11.25 10.5625 11.375 10.625Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 3.125C0 1.39911 1.39911 0 3.125 0H16.875C18.6009 0 20 1.39911 20 3.125V16.875C20 18.6009 18.6009 20 16.875 20H3.125C1.39911 20 0 18.6009 0 16.875V3.125ZM10 5C11.3125 5 12.5625 5.5 13.5 6.4375C14.4375 7.375 15 8.625 15 9.9375C15 12.6875 12.75 14.9375 10 14.9375C9.1875 14.9375 8.37501 14.6875 7.62501 14.3125L5 15L5.6875 12.5C5.25001 11.75 5 10.875 5 10C5 7.25 7.25 5 10 5Z" fill="white" />
                            </svg>
                        </a>
                    </div>

                    <p className="text-white text-xs 2xl:text-sm font-light mt-[30px]">© Copyright irpan ramdani - {time}</p>
                </div>
            </nav>
        </>
    )
}

export default Navbar;