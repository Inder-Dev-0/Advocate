import { useState, useRef } from 'react';
import { FaBriefcase } from 'react-icons/fa';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const areas = [
  {
    title: 'Business Law',
    description: 'From contracts to compliance, we offer comprehensive business law solutions for enterprises of all sizes.',
  },
  {
    title: 'Employment Law',
    description: "Protecting employees' rights and providing guidance to employers in labor-related matters.",
  },
  {
    title: 'Finance Law',
    description: 'Advising clients on financial transactions, regulations, and compliance in a dynamic market.',
  },
];

const PracticeAreas = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const cardsRef = useRef([]);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: cardsRef.current[0],
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.fromTo(
          cardsRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
          }
        );
      },
    });
  }, []);

  return (
    <section className="bg-[#1b202b] py-16 text-white">
      <div className="container mx-auto px-4 grid grid-cols-1 gap-10">
        <div className='grid grid-cols-2 gap-10'>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">Explore The Perfect<br />Our Practice Areas</h2>
          <p className="text-sm text-gray-300">
            We are a group of civil litigation/trial attorneys who focus on providing a justice based on the issues relating to
            insurance defense, insurance coverage, bad faith, insurance fraud and criminal litigation.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {areas.map((area, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              onClick={() => setActiveIndex(idx)}
              className={`rounded-lg p-6 cursor-pointer transition-all duration-300 shadow-lg border border-transparent
                ${activeIndex === idx ? 'bg-[#d1b06b] text-black' : 'bg-[#1e242f] hover:bg-[#2a2f3a]'}
              `}
            >
              <FaBriefcase className={`text-2xl mb-3 ${activeIndex === idx ? 'text-black' : 'text-[#d1b06b]'}`} />
              <h3 className="font-semibold text-lg">{area.title}</h3>
              <p className="text-sm mt-2">{area.description}</p>
              <div className={`mt-4 border-t pt-4 text-center font-semibold text-sm ${activeIndex === idx ? 'text-black bg-white' : 'bg-black text-white'} p-2 rounded`}>View More</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
