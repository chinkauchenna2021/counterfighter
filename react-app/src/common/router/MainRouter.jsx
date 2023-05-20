import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CodeGenerator from "../pages/CodeGenerator";
import Qrcodepage from "../pages/Qrcodepage";
import ReportAbuse from "../pages/ReportAbuse";
import NotFound from "../pages/NotFound";

function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createcode" element={<CodeGenerator />} />
        <Route path="/generated" element={<Qrcodepage />} />
        <Route path="/reportAbuse" element={<ReportAbuse />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter