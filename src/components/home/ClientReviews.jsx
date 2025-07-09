import { FaQuoteRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect } from 'react';

import person1 from '../../assets/person/1.png'
import person2 from '../../assets/person/2.png'
import person3 from '../../assets/person/3.png'
import person4 from '../../assets/person/4.png'
import person5 from '../../assets/person/5.png'

const reviews = [
    {
        name: 'Shoo Bro Tho',
        role: 'Kang Bakso',
        image: person1,
        content:
            'Judy is the best lawyer I could have possibly asked for after my accident. With a dozen other things to worry about, I did not want to have to worry about navigating the court system.',
    },
    {
        name: 'Shoo Bro Nho',
        role: 'Kang Masak',
        image: person2,
        content:
            'After I was injured at work, I was worried about dealing with my employer’s insurance company. I am so grateful I chose Judy to represent me. He was incredibly professional, knowledgeable, and sincere from the start.',
    },
    {
        name: 'Shoo Mhan Tho',
        role: 'Kang Mancing',
        image: person3,
        content:
            'Judy is incredible. Intelligent, experienced, and caring. He spent all the time I needed without rushing me and making sure I was taken care of. 10/10',
    },
    {
        name: 'Lina Mart',
        role: 'Startup Founder',
        image: person5,
        content:
            'Very smooth process from start to finish. Judy guided me through every legal aspect with such clarity and empathy.',
    },
    {
        name: 'Ravi Patel',
        role: 'Construction Worker',
        image: person4,
        content:
            'Highly recommended! Judy made sure I received fair compensation after my accident. Thank you for your dedication.',
    },
];

const ClientReviews = () => {
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
      .swiper-button-prev,
      .swiper-button-next {
        color: #d1b06b;
      }
      .swiper-pagination-bullet {
        background: #d1b06b;
        opacity: 0.6;
      }
      .swiper-pagination-bullet-active {
        opacity: 1;
      }
    `;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    return (
        <section className="bg-[#1b202b] py-16 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-10">Client Review</h2>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    navigation={true}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    modules={[Navigation, Pagination, Autoplay]}
                    className='h-70 !px-8 md:!px-10'
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white text-black p-6 rounded-lg shadow-md h-full flex flex-col justify-between max-h-[240px]">
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="font-bold text-sm">{review.name}</h4>
                                        <p className="text-xs text-gray-500">{review.role}</p>
                                    </div>
                                    <FaQuoteRight className="ml-auto text-[#d1b06b] text-xl" />
                                </div>
                                <p className="text-sm text-gray-700">{review.content}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="text-right mt-6">
                    <a href="#" className="text-sm text-white underline hover:text-[#d1b06b]">Show me more &rarr;</a>
                </div>
            </div>
        </section>
    );
};

export default ClientReviews;