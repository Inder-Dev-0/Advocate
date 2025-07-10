import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import advocate from '../../assets/advocate.png'

const CasesSection = () => {
    const textRef = useRef();

    useGSAP(() => {
        gsap.from(textRef.current, { opacity: 0, y: 40, duration: 1.2 });
    })

    return (
        <div className="relative flex -top-22 bg-cover bg-center max-h-max py-8" style={{ backgroundImage: `url(${advocate})` }}>
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="relative container mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-30 sm:py-20 gap-10">
                <div ref={textRef} className="text-white max-w-xl">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">Cases</h1>
                    <p className="mt-4 text-gray-300">Explore our successful legal representations and landmark cases.</p>
                </div>
            </div>
        </div>
    );
};

export default CasesSection;