import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import case1 from '../../assets/cases/1.png';
import case2 from '../../assets/cases/2.png';
import case3 from '../../assets/cases/3.png';
import case4 from '../../assets/cases/4.png';
import case5 from '../../assets/cases/5.png';
import case6 from '../../assets/cases/6.png';
import case7 from '../../assets/cases/7.png';
import case8 from '../../assets/cases/8.png';
import case9 from '../../assets/cases/9.png';
import case10 from '../../assets/cases/10.png';
import case11 from '../../assets/cases/11.png';
import case12 from '../../assets/cases/12.png';
import { useGSAP } from '@gsap/react';

const imageMap = [
    case1, case2, case3, case4, case5, case6,
    case7, case8, case9, case10, case11, case12
];

gsap.registerPlugin(ScrollTrigger);

const CaseHistory = () => {
    const cardsRef = useRef([]);

    const casesData = [
        {
            year: '2020',
            title: 'Landmark Employment Dispute',
            desc: 'Secured fair compensation for a wrongfully terminated executive.',
        },
        {
            year: '2019',
            title: 'Corporate Merger Negotiation',
            desc: 'Facilitated a successful merger, ensuring a smooth transition.',
            featured: true,
        },
        {
            year: '2018',
            title: 'High-Profile Intellectual Property Defense',
            desc: "Protected a client's patent against infringement claims.",
        },
        {
            year: '2017',
            title: 'Complex Real Estate Litigation',
            desc: 'Achieved a favorable settlement in a multi-party dispute.',
        },
        {
            year: '2016',
            title: 'Medical Malpractice Defense',
            desc: 'Cleared a healthcare provider of negligence charges.',
        },
        {
            year: '2015',
            title: 'Environmental Compliance Advisory',
            desc: 'Guided a corporation to meet regulatory standards.',
        },
        {
            year: '2014',
            title: 'Criminal Defense for High-Profile Client',
            desc: 'Secured an acquittal in a high-stakes criminal trial.',
        },
        {
            year: '2013',
            title: 'International Trade Dispute Resolution',
            desc: 'Negotiated a favorable settlement for a global exporter.',
        },
        {
            year: '2012',
            title: 'Landmark Class Action Lawsuit',
            desc: 'Successfully represented a large group, setting a precedent for consumer.',
        },
    ];

    useGSAP(() => {
        gsap.to(cardsRef.current, {
            scrollTrigger: {
                trigger: cardsRef.current,
                start: 'top 80%',
            },
            opacity: 1,
            y: 40,
            stagger: 0.2,
            duration: 1,
            ease: 'power3.out',
        });
    }, []);

    return (
        <section className="bg-[#1b202b] text-white px-4 sm:px-6 lg:px-8 py-16 -mt-21 mb-20">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">Case History</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {casesData.map((item, index) => (
                        <div
                            key={index}
                            ref={el => cardsRef.current[index] = el}
                            className="rounded-lg overflow-hidden bg-[#2a2f3a] hover:shadow-lg transition duration-300 ease-in-out group"
                        >
                            <div className="relative">
                                <img
                                    src={imageMap[index]}
                                    alt={item.title}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
                                />
                                <span className="absolute top-2 left-2 bg-[#d1b06b] text-black text-xs px-3 py-1 rounded-full font-semibold">
                                    {item.year}
                                </span>
                            </div>
                            <div className="p-4">
                                <h3 className="text-base font-semibold mb-1 text-white">{item.title}</h3>
                                <p className="text-xs text-gray-400 mb-4">{item.description}</p>
                                <button className="text-sm bg-[#11141b] text-white border border-[#d1b06b] px-4 py-2 rounded hover:bg-[#d1b06b] hover:text-black transition duration-300">
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseHistory;