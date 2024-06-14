
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const UserDashboardHome = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="max-w-4xl w-full rounded-lg p-8">
                <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-6">Welcome, {user?.displayName}</h1>
                <p className="text-center text-gray-600 mb-8">This is your dashboard. From here, you can manage your parcels and account settings.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-blue-500 text-white p-6 rounded-lg text-center hover:bg-blue-600 cursor-pointer">
                        <h2 className="text-2xl font-bold mb-4">Book a Parcel</h2>
                        <p>Click here to book a new parcel for delivery.</p>
                    </div>

                    <div className="bg-green-500 text-white p-6 rounded-lg text-center hover:bg-green-600 cursor-pointer">
                        <h2 className="text-2xl font-bold mb-4">My Parcels</h2>
                        <p>View and manage your booked parcels.</p>
                    </div>

                    <div className="bg-yellow-500 text-white p-6 rounded-lg text-center hover:bg-yellow-600 cursor-pointer">
                        <h2 className="text-2xl font-bold mb-4">Account Settings</h2>
                        <p>Update your account information and settings.</p>
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

export default UserDashboardHome;
