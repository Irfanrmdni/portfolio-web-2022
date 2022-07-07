import React from 'react';
import Container from '../../../components/Container';
import Title from '../../../components/Title';


function Skills() {
    const skillsFrontEnd = [
        {
            id: 1,
            title: 'INTERMEDIATE',
            src: './images/html-5.svg'
        },
        {
            id: 2,
            title: 'INTERMEDIATE',
            src: './images/css-3.svg'
        },
        {
            id: 3,
            title: 'INTERMEDIATE',
            src: './images/javascript.svg'
        },
        {
            id: 4,
            title: 'INTERMEDIATE',
            src: './images/bootstrap.svg'
        },
        {
            id: 5,
            title: 'INTERMEDIATE',
            src: './images/tailwindcss.svg'
        },
        {
            id: 6,
            title: 'INTERMEDIATE',
            src: './images/sass.svg'
        },
        {
            id: 7,
            title: 'INTERMEDIATE',
            src: './images/react.svg'
        },
        {
            id: 8,
            title: 'INTERMEDIATE',
            src: './images/nextjs.svg'
        },
    ];

    const skillsBackEnd = [
        {
            id: 1,
            title: 'BEGINNER',
            src: './images/nodejs.svg'
        },
        {
            id: 2,
            title: 'BEGINNER',
            src: './images/express.svg'
        },
        {
            id: 3,
            title: 'BEGINNER',
            src: './images/mongodb.svg'
        },
        {
            id: 4,
            title: 'BEGINNER',
            src: './images/mysql.svg'
        },
    ]

    const skillsDesign = [
        {
            id: 1,
            title: 'INTERMEDIATE',
            src: './images/illustrator.svg'
        },
        {
            id: 2,
            title: 'INTERMEDIATE',
            src: './images/photoshop.svg'
        },
        {
            id: 3,
            title: 'INTERMEDIATE',
            src: './images/adobexd.svg'
        },
    ]

    return (
        <>
            <Container variant="gray">
                <Title>tools & skills</Title>

                <div className="w-full mt-[25px]">
                    <h5 className="text-xl md:text-[22px] lg:text-xl xl:text-2xl 2xl:text-[28px] 2xl:leading-[33px] md:leading-[26px] font-medium text-bluesecondary text-center md:text-left">Front End Technologies</h5>

                    <div className="flex flex-row flex-wrap justify-between items-center">
                        {skillsFrontEnd.map((item) => {
                            return <div className="w-[205px] md:w-[230px] lg:w-[209px] 2xl:w-[236px] 2xl:h-[95px] h-[65px] md:h-[78px] lg:h-[73px] xl:h-[85px] mt-[25px] md:mt-[30px] flex flex-row items-center rounded-[3px] md:rounded lg:rounded-[3px] xl:rounded bg-white overflow-hidden" key={item.id}>
                                <div className="w-[69px] md:w-[82.62px] lg:w-[75px] 2xl:w-[84px] 2xl:h-[95px] h-[65px] md:h-[77.59px] lg:h-[73px] xl:h-[85px] flex bg-gray mr-[19px] rounded-[3px] md:rounded lg:rounded-[3px] xl:rounded">
                                    <img src={item.src} alt={item.title} className="inline-block w-[32px] md:w-[38px] xl:w-[45px] 2xl:w-[50px] m-auto" />
                                </div>

                                <p className="text-sm md:text-base lg:text-sm 2xl:text-base font-medium uppercase text-bluesecondary">{item.title}</p>
                            </div>
                        })}
                    </div>
                </div>

                <div className="w-full mt-[40px]">
                    <h5 className="text-xl lg:text-xl md:text-[22px] xl:text-2xl 2xl:text-[28px] 2xl:leading-[33px] md:leading-[26px] font-medium text-bluesecondary text-center md:text-left">Back End Technologies</h5>

                    <div className="flex flex-row flex-wrap justify-between items-center">
                        {skillsBackEnd.map((item) => {
                            return <div className="w-[205px] md:w-[230px] lg:w-[209px] 2xl:w-[236px] 2xl:h-[95px] h-[65px] md:h-[78px] lg:h-[73px] xl:h-[85px] mt-[25px] md:mt-[30px] flex flex-row items-center rounded-[3px] md:rounded lg:rounded-[3px] xl:rounded bg-white overflow-hidden" key={item.id}>
                                <div className="w-[69px] md:w-[82.62px] lg:w-[75px] 2xl:w-[84px] 2xl:h-[95px] h-[65px] md:h-[77.59px] lg:h-[73px] xl:h-[85px] flex bg-gray mr-[34px] rounded-[3px] md:rounded lg:rounded-[3px] xl:rounded">
                                    <img src={item.src} alt={item.title} className="inline-block w-[40px] md:w-[48px] 2xl:w-[55px] m-auto" />
                                </div>

                                <p className="text-sm md:text-base lg:text-sm 2xl:text-base font-medium uppercase text-bluesecondary">{item.title}</p>
                            </div>
                        })}
                    </div>
                </div>

                <div className="w-full mt-[40px]">
                    <h5 className="text-xl lg:text-xl md:text-[22px] xl:text-2xl 2xl:text-[28px] 2xl:leading-[33px] md:leading-[26px] font-medium text-bluesecondary text-center md:text-left">User Interface Design</h5>

                    <div className="flex flex-row flex-wrap justify-between items-center">
                        <div className="w-[205px] md:w-[230px] lg:w-[209px] 2xl:w-[236px] 2xl:h-[95px] h-[65px] md:h-[78px] lg:h-[73px] xl:h-[85px] mt-[25px] md:mt-[30px] flex flex-row items-center rounded-[3px] md:rounded lg:rounded-[3px] xl:rounded bg-white overflow-hidden">
                            <div className="w-[69px] md:w-[82.62px] lg:w-[75px] 2xl:w-[84px] 2xl:h-[95px] h-[65px] md:h-[77.59px] lg:h-[73px] xl:h-[85px] flex bg-gray mr-[19px] rounded-[3px] md:rounded lg:rounded-[3px] xl:rounded">
                                <img src="./images/figma.svg" alt="figma" className="inline-block w-[26px] md:w-[28px] xl:w-[32px] 2xl:w-[37px] m-auto" />
                            </div>

                            <p className="text-sm md:text-base lg:text-sm 2xl:text-base font-medium uppercase text-bluesecondary">INTERMEDIATE</p>
                        </div>

                        {skillsDesign.map((item) => {
                            return <div className="w-[205px] md:w-[230px] lg:w-[209px] 2xl:w-[236px] 2xl:h-[95px] h-[65px] md:h-[78px] lg:h-[73px] xl:h-[85px] mt-[25px] md:mt-[30px] flex flex-row items-center rounded-[3px] md:rounded lg:rounded-[3px] xl:rounded bg-white overflow-hidden" key={item.id}>
                                <div className="w-[69px] md:w-[82.62px] lg:w-[75px] 2xl:w-[84px] 2xl:h-[95px] h-[65px] md:h-[77.59px] lg:h-[73px] xl:h-[85px] flex bg-gray mr-[19px] rounded-[3px] md:rounded lg:rounded-[3px] xl:rounded">
                                    <img src={item.src} alt={item.title} className="inline-block w-[40px] md:w-[45px] 2xl:w-14 2xl:h-14 h-[45px] m-auto" />
                                </div>

                                <p className="text-sm md:text-base lg:text-sm 2xl:text-base font-medium uppercase text-bluesecondary">{item.title}</p>
                            </div>
                        })}
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Skills;