import React from 'react';

function Container({ children, variant, id, headerMobile }) {
    const customVariant = {
        'white': 'bg-white',
        'gray': 'bg-graybackground',
    }
    const addId = id ? id : "";
    const addVariant = customVariant[variant];

    return (
        <section className={`relative w-full lg:w-[80%] lg:float-right h-full py-16 lg:py-24 px-[10px] sm:px-[15px] md:px-[20px] lg:px-[30px] xl:px-[55px] 2xl:px-[85px] overflow-hidden ${headerMobile ? 'mt-[50px] md:mt-[65px] lg:mt-0' : ''} ${addVariant}`} id={addId}>{children}</section>
    )
}

export default Container;