import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CodeGenerator from "../pages/CodeGenerator";

function MainRouter() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/createcode" element={<CodeGenerator />} />
              <Route path="*" element={""} />
         </Routes>
      </BrowserRouter>
  )
}

export default MainRouter