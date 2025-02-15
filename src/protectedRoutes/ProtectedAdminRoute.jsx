import { Navigate, Outlet } from "react-router-dom";

const ProtectedAdminRoute = () => {
  const adminToken = localStorage.getItem("CCAdminToken");

  return adminToken ? <Outlet /> : <Navigate to="/admin-login" />;
};

export default ProtectedAdminRoute;
