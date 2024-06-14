import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const AllParcel = () => {
    const axiosSecure = useAxiosSecure();
    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['parcels'],
        queryFn: async () => {
            const res = await axiosSecure.get('/bookingParcels');
            return res.data;
        }
    });

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-6">All Parcels</h1>
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 border-b">User’s Name</th>
                            <th className="py-2 border-b">User’s Phone</th>
                            <th className="py-2 border-b">Booking Date</th>
                            <th className="py-2 border-b">Requested Delivery Date</th>
                            <th className="py-2 border-b">Cost</th>
                            <th className="py-2 border-b">Status</th>
                            <th className="py-2 border-b">Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {parcels.map((parcel) => (
                            <tr key={parcel._id}>
                                <td className="py-2 border-b text-center">{parcel.senderName}</td>
                                <td className="py-2 border-b text-center">{parcel.senderPhoneNumber}</td>
                                <td className="py-2 border-b text-center">{new Date(parcel.bookingDate).toLocaleDateString()}</td>
                                <td className="py-2 border-b text-center">{new Date(parcel.requestedDeliveryDate).toLocaleDateString()}</td>
                                <td className="py-2 border-b text-center">{parcel.price}</td>
                                <td className={`py-2 border-b text-center ${parcel.status === 'delivered' ? 'text-green-500' : 'text-red-500'}`}>
                                    {parcel.status}
                                </td>
                                <td className="py-2 border-b text-center">
                                    <button className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600">
                                        Manage
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

export default AllParcel;
