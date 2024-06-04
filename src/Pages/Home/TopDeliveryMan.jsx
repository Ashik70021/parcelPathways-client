
const deliveryMen = [
    {
        name: 'John Doe',
        image: 'https://via.placeholder.com/150', 
        parcelsDelivered: 200,
        rating: 4.9
    },
    {
        name: 'Jane Smith',
        image: 'https://via.placeholder.com/150', 
        parcelsDelivered: 180,
        rating: 4.8
    },
    {
        name: 'Robert Johnson',
        image: 'https://via.placeholder.com/150', 
        parcelsDelivered: 220,
        rating: 5.0
    },
    {
        name: 'Alice Brown',
        image: 'https://via.placeholder.com/150', 
        parcelsDelivered: 210,
        rating: 3.9
    },
    {
        name: 'James White',
        image: 'https://via.placeholder.com/150', 
        parcelsDelivered: 170,
        rating: 4.5
    },
    {
        name: 'Emma Green',
        image: 'https://via.placeholder.com/150', 
        parcelsDelivered: 240,
        rating: 4.1
    }
];

const TopDeliveryMan = () => {
    // Sort the delivery men by parcelsDelivered in descending order
    const sortedDeliveryMen = deliveryMen.sort((a, b) => b.parcelsDelivered - a.parcelsDelivered);

    // Get the top 3 delivery men
    const topDeliveryMen = sortedDeliveryMen.slice(0, 3);

    return (
        <section className="py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Top Delivery Men</h2>
                    <p className="mt-4 text-lg text-gray-600">Our best delivery personnel.</p>
                </div>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {topDeliveryMen.map((man, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
                            <img src={man.image} alt={man.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{man.name}</h3>
                            <p className="text-gray-600">Parcels Delivered: {man.parcelsDelivered}</p>
                            <p className="text-gray-600">Rating: {man.rating} ⭐</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopDeliveryMan;
