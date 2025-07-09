import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import contactImage from '../../assets/hamer.png';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
    const sectionRef1 = useRef(null);
    const sectionRef2 = useRef(null);

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: sectionRef1.current,
            start: 'top 70%',
            once: true,
            onEnter: () => {
                gsap.fromTo(
                    sectionRef1.current,
                    { opacity: 0, x: -30 },
                    { opacity: 1, x: 0, duration: 1, ease: 'all' }
                );
            },
        });
    }, []);

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: sectionRef2.current,
            start: 'top 70%',
            once: true,
            onEnter: () => {
                gsap.fromTo(
                    sectionRef2.current,
                    { opacity: 0, x: 30 },
                    { opacity: 1, x: 0, duration: 1, ease: 'all' }
                );
            },
        });
    }, []);

    return (
        <section className="bg-[#1b202b] text-white px-4 sm:px-6 lg:px-8 py-16 -mt-21">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div ref={sectionRef1}>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">General Inquiries</h2>
                    <p className="text-sm text-gray-300 mb-6">
                        Feel free to get in touch with us for expert legal advice and consultation. We are dedicated to helping you navigate through any legal issues you may have with utmost diligence.
                    </p>
                    <form className="space-y-4">
                        <input type="text" placeholder="Name" className="w-full px-4 py-2 rounded bg-[#f1f5f9] text-black" />
                        <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded bg-[#f1f5f9] text-black" />
                        <input type="tel" placeholder="Phone" className="w-full px-4 py-2 rounded bg-[#f1f5f9] text-black" />
                        <textarea placeholder="Message" rows="4" className="w-full px-4 py-2 rounded bg-[#f1f5f9] text-black"></textarea>
                        <button type="submit" className="bg-[#d1b06b] text-black font-semibold px-6 py-2 rounded hover:bg-black hover:text-[#d1b06b] transition duration-300">
                            Schedule a Free Consultation
                        </button>
                    </form>
                </div>
                <div ref={sectionRef2}>
                    <img
                        src={contactImage}
                        alt="Contact Us"
                        className="w-full h-auto rounded shadow-lg object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default ContactForm;