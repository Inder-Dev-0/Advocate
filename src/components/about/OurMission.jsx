import { useRef } from 'react';
import { FaCheckSquare } from 'react-icons/fa';
import missionImage from '../../assets/mission.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const missionPoints = [
  {
    title: 'Client-Centric Advocacy',
    description: 'Putting clients first in every legal endeavor.',
  },
  {
    title: 'Ethical Excellence',
    description: 'Upholding the highest standards of legal ethics.',
  },
  {
    title: 'Strategic Solutions',
    description: 'Crafting innovative strategies for complex cases.',
  },
  {
    title: 'Lasting Client Partnerships',
    description: 'Building relationships that extend beyond cases.',
  },
];

const OurMission = () => {
  const pointsRef = useRef([]);

  useGSAP(() => {
    gsap.from(pointsRef.current, {
      scrollTrigger: {
        trigger: pointsRef.current,
        start: 'top 80%',
      },
      opacity: 0,
      y: 40,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <section className="bg-[#1b202b] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-sm text-gray-300 mb-6">
            At Judy, our mission is clear: to provide exceptional legal services with unwavering integrity, ensuring client success.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {missionPoints.map((point, idx) => (
              <div
                key={idx}
                ref={el => pointsRef.current[idx] = el}
                className="flex items-start gap-3"
              >
                <FaCheckSquare className="text-[#d1b06b] text-xl mt-1" />
                <div>
                  <h4 className="font-bold text-base mb-1">{point.title}</h4>
                  <p className="text-sm text-gray-400">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={missionImage}
            alt="Our Mission"
            className="w-full h-auto rounded shadow-lg object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default OurMission;