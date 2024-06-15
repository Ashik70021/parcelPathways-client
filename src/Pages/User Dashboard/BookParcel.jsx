import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const BookParcel = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()

    const [formData, setFormData] = useState({
        senderName: '',
        senderEmail: '',
        senderPhoneNumber: '',
        parcelType: '',
        parcelWeight: 0,
        receiverName: '',
        receiverPhoneNumber: '',
        deliveryAddress: '',
        receiverAddress: '',
        price: 0,
        status: 'pending',
        deliveryman: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        if (name === 'parcelWeight') {
            calculatePrice(value);
        }
    };

    const calculatePrice = (weight) => {
        let price = 0;
        if (weight <= 1) {
            price = 50;
        } else if (weight <= 2) {
            price = 100;
        } else {
            price = 150;
        }
        setFormData((prevState) => ({
            ...prevState,
            price: price
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        const userInfo = {
            senderName: user.displayName,
            senderEmail: user.email,
            senderPhoneNumber: formData.senderPhoneNumber,
            parcelType: formData.parcelType,
            parcelWeight: formData.parcelWeight,
            receiverName: formData.receiverName,
            receiverPhoneNumber: formData.senderPhoneNumber,
            deliveryAddress: formData.deliveryAddress,
            receiverAddress: formData.receiverAddress,
            price: formData.price,
            status: formData.status,
            deliveryman: formData.deliveryman,

        }
        axiosPublic.post('/bookingParcel', userInfo)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    console.log("Parcel delivery booking successful")
                }
            })
            .catch(error => console.log(error))
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-full w-full bg-white shadow-md rounded-lg p-8">
                <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">Book a Parcel</h2>
                <form onSubmit={handleSubmit}>
                    <div className="flex gap-24 justify-center">
                        <div>
                            <div className="mb-4">
                                <label htmlFor="senderName" className=" text-gray-700">Sender Name</label>
                                <input
                                    type="text"
                                    id="senderName"
                                    name="senderName"
                                    value={user?.displayName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="senderEmail" className=" text-gray-700">Sender Email</label>
                                <input
                                    type="email"
                                    id="senderEmail"
                                    name="senderEmail"
                                    value={user?.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="senderPhoneNumber" className=" text-gray-700">Sender Phone Number</label>
                                <input
                                    type="text"
                                    id="senderPhoneNumber"
                                    name="senderPhoneNumber"
                                    value={formData.senderPhoneNumber}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="parcelType" className=" text-gray-700">Parcel Type</label>
                                <input
                                    type="text"
                                    id="parcelType"
                                    name="parcelType"
                                    value={formData.parcelType}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="parcelWeight" className=" text-gray-700">Parcel Weight (kg)</label>
                                <input
                                    type="number"
                                    id="parcelWeight"
                                    name="parcelWeight"
                                    value={formData.parcelWeight}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <div className="mb-4">
                                <label htmlFor="receiverName" className=" text-gray-700">Receiver Name</label>
                                <input
                                    type="text"
                                    id="receiverName"
                                    name="receiverName"
                                    value={formData.receiverName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="receiverPhoneNumber" className="text-gray-700">Receiver Phone Number</label>
                                <input
                                    type="text"
                                    id="receiverPhoneNumber"
                                    name="receiverPhoneNumber"
                                    value={formData.receiverPhoneNumber}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="deliveryAddress" className="text-gray-700">Parcel Delivery Address</label>
                                <input
                                    type="text"
                                    id="deliveryAddress"
                                    name="deliveryAddress"
                                    value={formData.deliveryAddress}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="receiverAddress" className=" text-gray-700">Receiver Address</label>
                                <input
                                    type="text"
                                    id="receiverAddress"
                                    name="receiverAddress"
                                    value={formData.receiverAddress}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="price" className=" text-gray-700">Price (Auto Calculated)</label>
                                <input
                                    type="text"
                                    id="price"
                                    name="price"
                                    value={formData.price}
                                    readOnly
                                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg bg-gray-200"
                                />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600">
                        Booking
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BookParcel;
