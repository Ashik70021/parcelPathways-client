import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AllDeliveryMan = () => {
    const [onlyUsers, setOnlyUsers] = useState([]);
    const axiosSecure = useAxiosSecure();
    const { data: sampleUsers = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            const filteredUser = sampleUsers.filter(user => user.type === "Delivery Man")
            setOnlyUsers(filteredUser)
            return res.data;
        }
    })

    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;

    // Calculate the displayed users
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = onlyUsers.slice(indexOfFirstUser, indexOfLastUser);
    console.log(currentUsers);




    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(onlyUsers.length / usersPerPage);



    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">All Delivery Man : {onlyUsers.length}</h2>
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Phone Number</th>
                            <th className="py-2 px-4 border-b">Parcels Booked</th>
                            <th className="py-2 px-4 border-b">Total Spent</th>
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {onlyUsers.map((user, index) => (
                            <tr key={index}>
                                <td className="py-2 px-4 border-b">{user.name}</td>
                                <td className="py-2 px-4 border-b">{user.phoneNumber}</td>
                                <td className="py-2 px-4 border-b">{user.parcelsBooked}</td>
                                <td className="py-2 px-4 border-b">${user.totalSpent}</td>
                                <td className="py-2 px-4 border-b">
                                    <button
                                        // onClick={() => handleMakeDeliveryMan(indexOfFirstUser + index)}
                                        className="bg-blue-500 text-white py-1 px-3 rounded mr-2"
                                    >
                                        Make User
                                    </button>
                                    <button
                                        // onClick={() => handleMakeAdmin(indexOfFirstUser + index)}
                                        className="bg-green-500 text-white py-1 px-3 rounded"
                                    >
                                        Make Admin
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="mt-4 flex justify-center">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`mx-1 px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllDeliveryMan;