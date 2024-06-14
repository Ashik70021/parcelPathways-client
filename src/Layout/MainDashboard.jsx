import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./Dashboard";
import DeliveryManDashboard from "./DeliveryDashboard";

const MainDashboard = () => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <div>Loading...</div>;
    }

    switch (user.role) {
        case "admin":
            return <AdminDashboard />;
        case "user":
            return <UserDashboard />;
        case "deliveryMan":
            return <DeliveryManDashboard />;
        default:
            return <div>Unauthorized</div>;
    }
};

export default MainDashboard;
