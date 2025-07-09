import { useRef } from 'react';
import gsap from 'gsap';
import lowTable from '../../assets/lawtable.png'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ConsultationCTA = () => {
  const containerRef = useRef();

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 70%',
      once: true,
      onEnter: () => {
        gsap.fromTo(
          containerRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, ease: 'all' }
        );
      },
    });
  }, []);

  return (
    <section
      className="relative bg-cover bg-center min-h-[300px] flex items-center justify-center"
      style={{ backgroundImage: `url(${lowTable})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div ref={containerRef} className="relative z-10 text-center">
        <h2 className="text-white text-3xl font-bold mb-6">
          Start With A Consultation To Get Compensation
        </h2>
        <button className="bg-[#d1b06b] hover:bg-[#d4a94f] transition text-black font-bold py-2 px-6 rounded">
          GET STARTED TODAY
        </button>
      </div>
    </section>
  );
};

export default ConsultationCTA;