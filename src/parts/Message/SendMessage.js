import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Container from '../../components/Container';

function SendMessage() {
    let [value, setValue] = useState({
        name: '',
        email: '',
        message: ''
    });
    let [checkName, setCheckName] = useState('');
    let [checkEmail, setcheckEmail] = useState('');
    let [checkMessage, setcheckMessage] = useState('');
    let navigate = useNavigate();

    const sendEmail = (e) => {
        e.preventDefault();
        if (value.name === '') {
            setCheckName('Name cannot be empty!');
        } else if (value.email === '') {
            setcheckEmail('Email cannot be empty!');
        } else if (value.message === '') {
            setcheckMessage('Message cannot be empty!');
        } else {
            emailjs.sendForm('service_dyg1tlm', 'template_fgxlt0h', e.target, 'qPBrJ0NvVsfiHSH8P')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            navigate('/success');
        }

        setValue({
            name: '',
            email: '',
            message: '',
        });
    }

    const itemInput = (e) => {
        e.preventDefault();
        const name = e.target.getAttribute('name');

        setValue({
            ...value,
            [name]: e.target.value
        });
    }

    function refreshPage() {
        setTimeout(() => {
            window.location.reload(false);
        }, 500);
    }

    return (
        <>
            <Container variant="gray" headerMobile>
                <div className="w-full text-center">
                    <h5 className="text-base md:text-lg xl:text-xl 2xl:text-[22px] 2xl:leading-[30px] text-bluesecondary">Have a new project in mind?</h5>
                    <p className="w-full sm:w-10/12 md:w-9/12 2xl:w-7/12 mx-auto text-xl md:text-2xl lg:text-[26px] lg:leading-9 xl:text-[28px] xl:leading-9 2xl:text-3xl uppercase text-blueprimary font-semibold">Please you can send message for any question or just say hi to me</p>
                </div>
                <div className="w-full md:w-10/12 lg:w-11/12 xl:w-10/12 md:mx-auto mt-6 sm:p-10 px-3 py-4 bg-blueprimary rounded">
                    <form className="w-full" onSubmit={sendEmail}>
                        {checkName ? <span className="inline-block text-base mb-1 text-yellow">{checkName}</span> : ''}
                        {checkEmail ? <span className="inline-block text-base mb-1 text-yellow">{checkEmail}</span> : ''}
                        {checkMessage ? <span className="inline-block text-base mb-1 text-yellow">{checkMessage}</span> : ''}
                        <div className="w-full md:flex md:flex-row md:justify-between md:items-center md:gap-x-10">
                            <input type="text" name="name" id="name" value={value.name} placeholder="Name" className="w-full text-sm py-3 px-4 rounded outline-none" onChange={itemInput} autoComplete="off" />
                            <input type="email" name="email" id="email" value={value.email} placeholder="Email" className="w-full text-sm py-3 px-4 rounded outline-none my-6 md:my-0" onChange={itemInput} autoComplete="off" />
                        </div>
                        <textarea name="message" id="message" value={value.message} placeholder="Message" className="w-full h-[290px] text-sm py-3 px-4 md:mt-6 rounded outline-none" onChange={itemInput}></textarea>

                        {/* <div className="g-recaptcha" data-sitekey="6Le7AMogAAAAAFZXzBEnT5htD1O4jddsZ5OhjfI7"></div> */}

                        <div className="w-full flex flex-row items-center justify-between mt-8">
                            <button type="submit" value="Send" className="w-[100px] xl:w-28 h-10 bg-bluesecondary hover:bg-yellow transition duration-150 ease-in text-white capitalize text-base xl:text-lg leading-[40px] font-medium rounded">
                                send
                                <svg className="inline-block ml-1" width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.63241 0L0 4.53387V5.12394L3.28032 6.71953L4.5464 10.8379H5.01639L8.63241 0Z" fill="white" />
                                </svg>
                            </button>

                            <Link to="/" onClick={refreshPage} className="capitalize text-base xl:text-lg font-medium hover:underline text-white">
                                back
                                <svg className="inline-block ml-1" width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 11.296L3.93842 6.4L0 1.504L1.21248 0L6.37199 6.4L1.21248 12.8L0 11.296Z" fill="white" />
                                </svg>
                            </Link>
                        </div>
                    </form>
                </div>
            </Container >
        </>
    )
}

export default SendMessage;