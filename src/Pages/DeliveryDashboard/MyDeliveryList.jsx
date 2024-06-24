import React, { useEffect, useState, useContext } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { AuthContext } from '../../Providers/AuthProvider';

const MyDeliveryList = () => {
    const { user } = useContext(AuthContext);
    const [parcels, setParcels] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        const fetchParcels = async () => {
            try {
                const res = await axiosSecure.get(`/parcels?deliveryManId=${user.id}`);
                setParcels(res.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchParcels();
    }, [axiosSecure, user.id]);

    const handleStatusChange = async (parcelId, status) => {
        if (window.confirm(`Are you sure you want to mark this parcel as ${status}?`)) {
            try {
                await axiosSecure.put(`/parcels/${parcelId}/status`, { status });
                setParcels(parcels.map(parcel => 
                    parcel._id === parcelId ? { ...parcel, status } : parcel
                ));
            } catch (error) {
                console.error(`Error updating parcel status to ${status}:`, error);
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-7xl w-full bg-white shadow-md rounded-lg p-8">
                <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">My Delivery List</h2>
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2">Booked User's Name</th>
                            <th className="py-2">Receiver's Name</th>
                            <th className="py-2">Booked User's Phone</th>
                            <th className="py-2">Approximate Delivery Date</th>
                            <th className="py-2">Receiver's Phone Number</th>
                            <th className="py-2">Receiver's Address</th>
                            <th className="py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {parcels.map((parcel) => (
                            <tr key={parcel._id}>
                                <td className="py-2 text-center">{parcel.senderName}</td>
                                <td className="py-2 text-center">{parcel.receiverName}</td>
                                <td className="py-2 text-center">{parcel.senderPhoneNumber}</td>
                                <td className="py-2 text-center">{parcel.approximateDeliveryDate}</td>
                                <td className="py-2 text-center">{parcel.receiverPhoneNumber}</td>
                                <td className="py-2 text-center">{parcel.deliveryAddress}</td>
                                <td className="py-2 text-center space-x-2">
                                    <button
                                        className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600"
                                    >
                                        View Location
                                    </button>
                                    <button
                                        onClick={() => handleStatusChange(parcel._id, 'cancelled')}
                                        className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={() => handleStatusChange(parcel._id, 'delivered')}
                                        className="bg-green-500 text-white px-4 py-1 rounded-lg hover:bg-green-600"
                                    >
                                        Deliver
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyDeliveryList;
