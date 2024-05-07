import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/public/HomePage";
import ListCoworkingsPage from "./page/public/ListCoworkingsPage";
import DetailsCoworkingPage from "./page/public/DetailsCoworkingPage";
import LoginPage from "./page/public/LoginPage";
import AdminDashboardPage from "./page/admin/AdminDashboardPage";
import AdminListCoworkingsPage from "./page/admin/AdminListCoworkingsPage";
import AdminCreateCoworkingPage from "./page/admin/AdminCreateCoworkingPage";
import AdminUpdateCoworkingPage from "./page/admin/AdminUpdateCoworkingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coworkings" element={<ListCoworkingsPage />} />
        <Route path="/coworkings/details/:id" element={<DetailsCoworkingPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminDashboardPage />} />
        <Route path="/admin/coworkings" element={<AdminListCoworkingsPage />} />
        <Route path="/admin/coworkings/create" element={<AdminCreateCoworkingPage />} />

        <Route path="/admin/coworkings/:id/update" element={<AdminUpdateCoworkingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
