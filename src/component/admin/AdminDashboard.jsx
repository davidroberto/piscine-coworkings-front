import AdminHeader from "./AdminHeader";
import { useVerifyToken } from "../../utils/authGuard";

const AdminDashboard = () => {
  useVerifyToken();

  return (
    <>
      <AdminHeader />

      <h1>Bienvenue Admin</h1>
    </>
  );
};

export default AdminDashboard;
