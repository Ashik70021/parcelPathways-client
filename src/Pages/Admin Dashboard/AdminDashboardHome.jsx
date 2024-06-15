// AdminDashboardHome.js

import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement);

const AdminDashboardHome = () => {
    const barData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Parcels Delivered',
                data: [12, 19, 3, 5, 2, 3, 9],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
            {
                label: 'Parcels Booked',
                data: [5, 15, 8, 2, 6, 7, 10],
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
            },
        ],
    };

    const doughnutData = {
        labels: ['User', 'Delivery Man', 'Admin'],
        datasets: [
            {
                label: 'User Types',
                data: [200, 50, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="max-w-7xl w-full rounded-lg p-8">
                <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-6">Admin Dashboard Statistics</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4 text-center">Monthly Parcel Stats</h2>
                        <Bar data={barData} />
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4 text-center">User Types Distribution</h2>
                        <Doughnut data={doughnutData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardHome;
