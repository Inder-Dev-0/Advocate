import { useRef } from 'react';
import gsap from 'gsap';
import ConsultationForm from './ConsultationForm';
import { useGSAP } from '@gsap/react';
import advocate from '../../assets/advocate.png'

const HeroSection = () => {
    const textRef = useRef();

    useGSAP(() => {
        gsap.from(textRef.current, { opacity: 0, y: 40, duration: 1.2 });
    })

    return (
        <div className="relative flex -top-22 bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${advocate})` }}>
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="relative container mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-30 sm:py-20 gap-10">
                <div ref={textRef} className="text-white max-w-xl">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">We're Group Of Certified Law Professionals</h1>
                    <p className="mt-4 text-gray-300">we have helped countless maritime workers and their families go up against the largest offshore companies and win.</p>
                    <button  className="mt-6 bg-[#d1b06b] hover:bg-[#d4a94f] text-black px-6 py-3 rounded shadow transition-all duration-300">
                        Get In Touch
                    </button>
                </div>
                <ConsultationForm />
            </div>
        </div>
    );
};

export default HeroSection;