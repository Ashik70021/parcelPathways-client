import { FaTruck, FaLock, FaBox } from 'react-icons/fa';
const Features = () => {
    const features = [
        {
            icon: <FaTruck className="text-4xl text-blue-500" />,
            safetyTag: "Fast Delivery",
            description: "Get your parcels delivered in record time with our efficient delivery network."
        },
        {
            icon: <FaLock className="text-4xl text-green-500" />,
            safetyTag: "Secure Handling",
            description: "Your parcels are handled with the utmost care to ensure they reach safely."
        },
        {
            icon: <FaBox className="text-4xl text-yellow-500" />,
            safetyTag: "Real-time Tracking",
            description: "Track your parcels in real-time from dispatch to delivery."
        }
    ];
    return (
        <section className="py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Our Features</h2>
                    <p className="mt-4 text-lg text-gray-600">Delivering excellence, one parcel at a time.</p>
                </div>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center relative group">
                            <div className="flex justify-center mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.safetyTag}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                            {/* <div className="absolute inset-0 bg-black bg-opacity-75 text-white flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-lg font-semibold">Total booked: {feature.totalBooked}</span>
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;