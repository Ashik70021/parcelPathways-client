
const Statistics = () => {
    // Sample data for demonstration purposes
    const stats = {
        totalParcelsBooked: 1000,
        totalParcelsDelivered: 800,
        totalUsers: 300
    };

    return (
        <section className="py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-extrabold text-gray-900">Website Usage Statistics</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <h3 className="text-2xl font-semibold mb-2">Total Parcels Booked</h3>
                        <p className="text-4xl font-bold text-blue-500">{stats.totalParcelsBooked}</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <h3 className="text-2xl font-semibold mb-2">Total Parcels Delivered</h3>
                        <p className="text-4xl font-bold text-green-500">{stats.totalParcelsDelivered}</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <h3 className="text-2xl font-semibold mb-2">Total Users</h3>
                        <p className="text-4xl font-bold text-yellow-500">{stats.totalUsers}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Statistics;
