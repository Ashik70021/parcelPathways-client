import { useContext, useState } from "react";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Providers/AuthProvider";

import { useEffect } from "react";

const MyParcels = () => {
       const { user } = useContext(AuthContext);
    // console.log(user.email)
    // console.log(user)
    const [parcels, setparcels] = useState([]);
    // const axiosSecure = useAxiosSecure();
    // const { data: sampleUsers = [], refetch } = useQuery({
    //     queryKey: ['parcels', user.email],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get('/bookingParcels');  
    //         const filteredUser = sampleUsers.filter(user => user.senderEmail === user.email)
    //         setparcels(filteredUser)
    //         return res.data;     
    //     }       
    // })
    

    useEffect(() =>{
        fetch(`${import.meta.env.VITE_API_URL}/bookingParcels`)
        .then(res => res.json())
        .then(data => {
            const usersparccels = data.filter(parcel =>parcel.senderEmail === user.email);
            setparcels(usersparccels)
        })
    },[user.email])





    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-7xl w-full bg-white shadow-md rounded-lg p-8">
                <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">My Parcels: {parcels.length}</h2>
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

                                        className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600"
                                    >
                                        Update
                                    </button>
                                    <button

                                        className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600"
                                    >
                                        Cancel
                                    </button>
                                    {parcel.bookingStatus === 'delivered' && (
                                        <button

                                            className="bg-yellow-500 text-white px-4 py-1 rounded-lg hover:bg-yellow-600"
                                        >
                                            Review
                                        </button>
                                    )}
                                    <button

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
