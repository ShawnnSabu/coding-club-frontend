import "../styles/home.css";
import AdminHeader from "./AdminHeader";

const AdminDashboard = () => {
    return (
        <>
            <div className="admin-dashboard-container">
                <AdminHeader />

                <div className="flex-auto">
                    <div className="flex flex-col justify-center items-center h-screen pb-44 sm:pb-32">
                        <div className="relative">
                            <div className="absolute top-1/4 left-1/2 translate-x-[-50%] translate-y-[-85%] w-max text-4xl sm:text-6xl">
                                Welcome to
                            </div>
                            <div className="absolute top-1/4 left-1/2 translate-x-[-50%] w-max text-4xl sm:text-6xl">
                                The Admin Dashboard
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminDashboard;
