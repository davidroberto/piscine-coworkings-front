import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/public/HomePage";
import ListCoworkingsPage from "./page/public/ListCoworkingsPage";
import DetailsCoworkingPage from "./page/public/DetailsCoworkingPage";
import LoginPage from "./page/public/LoginPage";
import AdminListCoworkingsPage from "./page/admin/AdminListCoworkingsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coworkings" element={<ListCoworkingsPage />} />
        <Route path="/coworkings/details/:id" element={<DetailsCoworkingPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/admin/coworkings" element={<AdminListCoworkingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
