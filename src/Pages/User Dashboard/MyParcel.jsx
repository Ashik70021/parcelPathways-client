import { useState } from "react";

const MyParcels = () => {
    // Sample data to mimic the parcels booked by the logged-in user
    const [parcels, setParcels] = useState([
        {
            id: 1,
            parcelType: 'Document',
            requestedDeliveryDate: '2024-06-10',
            approximateDeliveryDate: '2024-06-12',
            bookingDate: new Date().toLocaleDateString(),
            deliveryMenID: null,
            bookingStatus: 'pending'
        },
        {
            id: 2,
            parcelType: 'Package',
            requestedDeliveryDate: '2024-06-11',
            approximateDeliveryDate: '2024-06-13',
            bookingDate: new Date().toLocaleDateString(),
            deliveryMenID: 'DM123',
            bookingStatus: 'delivered'
        },
        {
            id: 3,
            parcelType: 'Box',
            requestedDeliveryDate: '2024-06-12',
            approximateDeliveryDate: '2024-06-14',
            bookingDate: new Date().toLocaleDateString(),
            deliveryMenID: 'DM456',
            bookingStatus: 'on the way'
        }
    ]);

    const handleUpdate = (id) => {
        // Implement the update logic here
        console.log(`Update parcel with ID: ${id}`);
    };

    const handleCancel = (id) => {
        // Implement the cancel logic here
        console.log(`Cancel parcel with ID: ${id}`);
    };

    const handleReview = (id) => {
        // Implement the review logic here
        console.log(`Review parcel with ID: ${id}`);
    };

    const handlePay = (id) => {
        // Implement the payment logic here
        console.log(`Pay for parcel with ID: ${id}`);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-7xl w-full bg-white shadow-md rounded-lg p-8">
                <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">My Parcels</h2>
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2">Parcel Type</th>
                            {/* <th className="py-2">Requested Delivery Date</th> */}
                            <th className="py-2">Approximate Delivery Date</th>
                            <th className="py-2">Booking Date</th>
                            <th className="py-2">Delivery Men ID</th>
                            <th className="py-2">Booking Status</th>
                            <th className="py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {parcels.map((parcel) => (
                            <tr key={parcel.id}>
                                <td className="py-2 text-center">{parcel.parcelType}</td>
                                <td className="py-2 text-center">{parcel.requestedDeliveryDate}</td>
                                {/* <td className="py-2 text-center">{parcel.approximateDeliveryDate}</td> */}
                                <td className="py-2 text-center">{parcel.bookingDate}</td>
                                <td className="py-2 text-center">{parcel.deliveryMenID || 'Not Assigned'}</td>
                                <td className={`py-2 text-center ${parcel.bookingStatus === 'delivered' ? 'text-green-500' : 'text-red-500'}`}>
                                    {parcel.bookingStatus}
                                </td>
                                <td className="py-2 text-center space-x-2">
                                    <button
                                        onClick={() => handleUpdate(parcel.id)}
                                        className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => handleCancel(parcel.id)}
                                        className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600"
                                    >
                                        Cancel
                                    </button>
                                    {parcel.bookingStatus === 'delivered' && (
                                        <button
                                            onClick={() => handleReview(parcel.id)}
                                            className="bg-yellow-500 text-white px-4 py-1 rounded-lg hover:bg-yellow-600"
                                        >
                                            Review
                                        </button>
                                    )}
                                    <button
                                        onClick={() => handlePay(parcel.id)}
                                        className="bg-green-500 text-white px-4 py-1 rounded-lg hover:bg-green-600"
                                    >
                                        Pay
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

export default MyParcels;
