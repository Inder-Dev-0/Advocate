import { useGSAP } from '@gsap/react';
import contract from '../../assets/contract.png'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const AboutFirm = () => {
  const containerRef1 = useRef();
  const containerRef2 = useRef();
  
    useGSAP(() => {
      ScrollTrigger.create({
        trigger: containerRef1.current,
        start: 'top 70%',
        once: true,
        onEnter: () => {
          gsap.fromTo(
            containerRef1.current,
            { opacity: 0, x: 30 },
            { opacity: 1, x: 0, duration: 1, ease: 'all' }
          );
        },
      });
    }, []);
    
    useGSAP(() => {
      ScrollTrigger.create({
        trigger: containerRef1.current,
        start: 'top 70%',
        once: true,
        onEnter: () => {
          gsap.fromTo(
            containerRef2.current,
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 1, ease: 'all' }
          );
        },
      });
    }, []);

  return (
    <section className="bg-[#1b202b] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div ref={containerRef2}>
          <img
            src={contract}
            alt="Contract Discussion"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div ref={containerRef1}>
          <h2 className="text-3xl font-bold mb-4 leading-snug">
            We Have Been Helping<br />
            People With Rights
          </h2>
          <p className="text-gray-300 mb-6">
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur
            duis deserunt mollit dolore cillum minim tempor dolore cillum minim tempor enim. Elit aute
            irure tempor cupidatat incididunt sint deserunt voluptate aute id deserunt nisi.
          </p>
          <a href='/about' className="bg-[#d1b06b] text-white font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-all duration-200">
            ABOUT OUR FIRM
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutFirm;