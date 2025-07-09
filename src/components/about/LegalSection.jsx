import duties from '../../assets/duties.png'
import bg from '../../assets/bg-about.png'

const LegalSection = () => {
    return (
        <section className="bg-[#1b202b] relative text-white px-6 py-16">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-11 z-1"
                style={{ backgroundImage: `url(${bg})` }}
            ></div>

            <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                <div className='flex flex-col gap-5'>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-[#d1b06b]">Judy Attorneys</span></h2>
                    <p className="mb-4 text-sm text-gray-300">
                        Founded in 2010, Judy has established itself as a leading force in legal advocacy. Our team of experienced attorneys is committed to delivering exceptional legal representation with unwavering integrity.
                    </p>
                    <p className="text-sm text-gray-300">
                        At Judy, we prioritize client success. Our tailored approach ensures that every case receives the attention it deserves. With a track record of successful outcomes, we stand as a beacon of legal excellence.
                    </p>
                </div>
                <div>
                    <img
                        src={duties}
                        alt="About Judy Attorneys"
                        className="w-full h-auto rounded shadow-lg object-cover"
                    />
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-12 grid md:grid-cols-3 gap-6 text-sm text-gray-300">
                <p>
                    Integrity is the cornerstone of our practice. We uphold the highest ethical standards, providing transparent and reliable legal counsel. With a focus on building lasting client relationships, we strive for excellence in every case.
                </p>
                <p>
                    With a diverse team of legal experts, we have the knowledge and experience to handle a wide range of cases. From complex litigation to strategic business advice, we are equipped to meet your legal needs.
                </p>
                <p>
                    Our commitment extends beyond legal expertise. We foster a culture of empathy and communication, ensuring that every client feels heard and understood throughout their legal journey.
                </p>
            </div>
        </section>
    );
};

export default LegalSection;