import React from 'react'

function Title({ children }) {
    return (
        <h1 className="w-fit text-[26px] md:text-3xl lg:text-[28px] lg:leading-[33px] xl:text-[32px] xl:leading-[38px] 2xl:text-4xl md:text-left leading-[30px] text-bluesecondary font-bold uppercase m-auto md:m-0">
            {children}
            <hr className="w-full border-[3px] border-yellow" />
        </h1>
    )
}

export default Title