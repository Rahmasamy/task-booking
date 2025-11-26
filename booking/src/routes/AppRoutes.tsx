import Home from "@/pages/Home";
import { Routes, Route } from "react-router-dom"; 

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/unauthorized" element={<h1>Access Denied 🚫</h1>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}
