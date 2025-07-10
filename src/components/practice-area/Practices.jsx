// File: src/components/PracticeAreas.jsx
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaBriefcase } from 'react-icons/fa';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const areas = [
  {
    title: 'Business Law',
    desc: 'From contracts to compliance, we offer comprehensive business law solutions for enterprises of all sizes.',
  },
  {
    title: 'Employment Law',
    desc: "Protecting employees' rights and providing guidance to employers in labor-related matters.",
  },
  {
    title: 'Finance Law',
    desc: 'Advising clients on financial transactions, regulations, and compliance in a dynamic market.',
  },
  {
    title: 'Insurance Law',
    desc: 'Expertise in insurance claims, policy disputes, and coverage litigation for individuals and businesses.',
  },
  {
    title: 'E commerce Law',
    desc: 'Navigating the legal complexities of online commerce, ensuring compliance and risk management.',
  },
  {
    title: 'Lending Law',
    desc: 'Providing legal counsel to financial institutions and borrowers in lending transactions and agreements.',
  },
  {
    title: 'Real Estate Law',
    desc: 'Handling real estate transactions, property disputes, and land use regulations for a seamless experience.',
  },
  {
    title: 'Health Law',
    desc: 'Guiding healthcare providers and institutions through regulatory compliance and litigation support.',
  },
  {
    title: 'Lemon Law',
    desc: 'Advocating for consumers in cases of defective vehicles, ensuring protection under lemon laws.',
  },
];

const PracticeAreas = () => {
  const cardsRef = useRef([]);

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
    <section className="bg-[#1b202b] text-white px-4 sm:px-6 lg:px-8 py-16 -mt-22 mb-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">Practice Areas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {areas.map((item, index) => (
            <div
              key={index}
              ref={el => (cardsRef.current[index] = el)}
              className={`rounded-lg p-6 transition duration-300 ease-in-out group bg-[#2a2f3a]`}
            >
              <div className="text-3xl mb-4">
                <FaBriefcase className={item.featured ? 'text-black' : 'text-[#d1b06b]'} />
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${item.featured ? 'text-black' : 'text-white'}`}>{item.title}</h3>
              <p className={`text-sm ${item.featured ? 'text-black' : 'text-gray-400'} mb-4`}>{item.desc}</p>
              <button className={`text-sm w-full py-2 border ${item.featured ? 'bg-black text-white' : 'border-[#d1b06b] text-white hover:bg-[#d1b06b] hover:text-black'} transition duration-300`}>View More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;