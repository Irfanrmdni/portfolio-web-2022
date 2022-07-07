import React, { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function UseScrollTop() {
    const navigate = useNavigate();

    useLayoutEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });

    }, [navigate]);

    return (
        <>
        </>
    )
}

export default UseScrollTop;