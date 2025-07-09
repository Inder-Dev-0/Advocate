const ConsultationForm = () => {
  return (
    <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Free Consultation</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 rounded" />
        <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded" />
        <input type="tel" placeholder="Phone" className="w-full p-3 border border-gray-300 rounded" />
        <textarea placeholder="Subject" className="w-full p-3 border border-gray-300 rounded h-24" />
        <button type="submit" className="w-full bg-[#d1b06b] hover:bg-[#d4a94f] text-black font-semibold py-3 rounded transition-all duration-300">
          SCHEDULE A FREE CONSULTATION
        </button>
      </form>
    </div>
  );
};

export default ConsultationForm;