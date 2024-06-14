import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const DeliveryDashboardHome = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="max-w-4xl w-full rounded-lg p-8">
                <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-6">Welcome, {user?.displayName}</h1>
                <p className="text-center text-gray-600 mb-8">This is your delivery dashboard. From here, you can manage your assigned deliveries and update your status.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-blue-500 text-white p-6 rounded-lg text-center hover:bg-blue-600 cursor-pointer">
                        <h2 className="text-2xl font-bold mb-4">My Deliveries</h2>
                        <p>View and manage your assigned deliveries.</p>
                    </div>

                    <div className="bg-green-500 text-white p-6 rounded-lg text-center hover:bg-green-600 cursor-pointer">
                        <h2 className="text-2xl font-bold mb-4">Update Status</h2>
                        <p>Update the delivery status of your parcels.</p>
                    </div>

                    <div className="bg-yellow-500 text-white p-6 rounded-lg text-center hover:bg-yellow-600 cursor-pointer">
                        <h2 className="text-2xl font-bold mb-4">Delivery History</h2>
                        <p>View the history of your completed deliveries.</p>
                    </div>

                    <div className="bg-red-500 text-white p-6 rounded-lg text-center hover:bg-red-600 cursor-pointer">
                        <h2 className="text-2xl font-bold mb-4">Support</h2>
                        <p>Get help and support for your issues.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliveryDashboardHome;
