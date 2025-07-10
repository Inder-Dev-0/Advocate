import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cases = [
  { amount: 905000, title: 'Auto v. Truck', date: 'June 28, 2021' },
  { amount: 880000, title: 'Slip and Fall', date: 'December 9, 2022' },
  { amount: 750000, title: 'Ped v. Auto', date: 'September 28, 2022' },
  { amount: 650000, title: 'Premise Liability', date: 'September 18, 2021' },
];

const Counter = ({ end }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    let triggered = false;

    ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      onEnter: () => {
        if (!triggered) {
          triggered = true;
          gsap.to({}, {
            duration: 2,
            onUpdate: function () {
              const progress = this.progress();
              setCount(Math.floor(progress * end));
            },
          });
        }
      },
    });
  }, [end]);

  return <span ref={ref}>${Math.floor(count / 1000)}K</span>;
};

const VictoryCard = ({ amount, title, date }) => (
  <div className="bg-[#1e242f] rounded-lg p-6 text-center text-white shadow hover:shadow-lg transition">
    <div className="text-3xl font-bold text-white">
      <Counter end={amount} />
    </div>
    <div className="text-sm text-[#d1b06b] mt-2">{title}</div>
    <div className="text-xs text-gray-400 mt-1">{date}</div>
  </div>
);

const RecentVictories = () => {
  return (
    <section className="-mt-22 bg-[#1b202b] py-16">
      <h2 className="text-center text-white text-3xl md:text-5xl font-bold mb-10">Our Recent Victories</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {cases.map((c, i) => (
          <VictoryCard key={i} {...c} />
        ))}
      </div>
    </section>
  );
};

export default RecentVictories;