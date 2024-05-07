import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import AdminHeader from "./AdminHeader";

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = Cookies.get("access_token");

    if (!accessToken) {
      navigate("/login");
    }

    const decodedToken = jwtDecode(accessToken);

    if (!decodedToken.userId) {
      navigate("/login");
    }

    // Idéalement, utilisez la date de validé pour re-générer le token quand il est périmé
    // si le token est périmé et qu'il n'a pas été re-généré : déconnecté l'user
  }, []);

  return (
    <>
      <AdminHeader />

      <h1>Bienvenue Admin</h1>
    </>
  );
};

export default AdminDashboard;
