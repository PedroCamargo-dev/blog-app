import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Recents from "./pages/Recents";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/recentes" element={<Recents />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar" element={<Register />} />
      </Routes>
    </Router>
  );
}