import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Error404 from "./pages/Error404";

const Pages = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index={true} element={<Home />} />
        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};
export default Pages;
