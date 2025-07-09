import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import person1 from '../../assets/person1.png'
import person2 from '../../assets/person2.png'
import person3 from '../../assets/person3.png'

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    name: 'Shoo Phar Dhie',
    role: 'Professional Lawyer',
    image: person1,
  },
  {
    name: 'Shoo Mhan Tho',
    role: 'Professional Lawyer',
    image: person2,
    featured: true,
  },
  {
    name: 'Shoo Phar Mhan',
    role: 'Professional Lawyer',
    image: person3,
  },
];

const LegalTeam = () => {
  const cardsRef = useRef([]);

  useGSAP(() => {
    gsap.from(cardsRef.current, {
      scrollTrigger: {
        trigger: cardsRef.current[0],
        start: 'top 70%',
      },
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.2,
    });
  }, []);

  return (
    <section className="bg-[#1b202b] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold">Meet Our Legal Team</h2>
      </div>
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            ref={el => cardsRef.current[idx] = el}
            className={`rounded-lg overflow-hidden shadow-lg text-center transition-transform duration-300 ${
              member.featured ? 'bg-[#d1b06b] text-black' : 'bg-[#2c333f] text-white'
            }`}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h4 className="text-lg font-bold">{member.name}</h4>
              <p className="text-sm mt-1">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LegalTeam;