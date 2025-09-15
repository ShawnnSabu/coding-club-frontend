import "./App.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

import { useState, useRef, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Events from "./components/Events";
import Execom from "./components/Execom";
import Contacts from "./components/Contacts";
import { Toast } from "primereact/toast";
import AdminLogin from "./adminPages/AdminLogin";
import AdminDashboard from "./adminPages/AdminDashboard";
import AdminEvents from "./adminPages/AdminEvents";
import Loader from "./components/Loader/loader";
import ProtectedAdminRoute from "./protectedRoutes/ProtectedAdminRoute";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  function RequireAuth() {
    const token = localStorage.getItem("CCUserToken");
    if (token?.length > 0) return <Outlet />;
    else return <Navigate to="/" element={<Home />} exact />;
  }

  const toast = useRef(null);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-source w-full h-full max-w-screen">
      {isLoading ? (
        <Loader/>
      ) : (
        <>
          <Toast ref={toast} position="bottom-center" />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/execom" element={<Execom />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route element={<RequireAuth />}></Route>
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="/Login" element={<Login/>}/>
              <Route path="/Register" element={<Register/>}/>
              {/* Protected Admin Routes */}
              <Route element={<ProtectedAdminRoute />}>
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/admin-events" element={<AdminEvents />} />
              </Route>
              
            </Routes>
            <Footer />
          </BrowserRouter>
        </>
      )}
    </div>
  );
}

export default App;
