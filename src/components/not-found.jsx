import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import advocate from '../assets/advocate.png'

const Notfound = () => {
    const textRef = useRef();

    useGSAP(() => {
        gsap.from(textRef.current, { opacity: 0, y: 40, duration: 1.2 });
    })

    return (
        <div
            className="relative -top-21 bg-cover bg-center min-h-screen flex items-center justify-center px-4 -mb-21"
            style={{ backgroundImage: `url(${advocate})` }}
        >
            <div className="absolute inset-0 bg-black/70"></div>

            <div ref={textRef} className="relative z-10 text-center text-white max-w-2xl">
                <h2 className="text-lg sm:text-xl mb-2 font-medium">Error Page</h2>
                <h1 className="text-[120px] sm:text-[160px] font-extrabold leading-none">404</h1>
                <p className="text-sm sm:text-base text-gray-200 max-w-xl mx-auto mb-6">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <a href='/' className="bg-[#d1b06b] text-black px-6 py-3 text-sm font-semibold rounded hover:bg-[#c9a860] transition">
                    BACK TO HOMEPAGE
                </a>
            </div>
        </div>
    );
};

export default Notfound;