import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/public/HomePage";
import ListCoworkingsPage from "./page/public/ListCoworkingsPage";
import DetailsCoworkingPage from "./page/public/DetailsCoworkingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coworkings" element={<ListCoworkingsPage />} />

        <Route path="/coworkings/details/:id" element={<DetailsCoworkingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
