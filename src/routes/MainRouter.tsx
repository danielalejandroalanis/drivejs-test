import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Details, Home } from "../pages";
export const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Router>
  );
};
