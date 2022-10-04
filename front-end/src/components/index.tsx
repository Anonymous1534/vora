import "./components.scss";
import Overviews from "./Overviews";
import Shipments from "./Shipments";
import Error from "./Error";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Components = () => {
  return (
    <div className="main-component">
      <div className="component-body">
        <Routes>
          <Route index element={<Overviews />} />
          <Route path="/dashboard" element={<Overviews />} />
          <Route path="/shipments" element={<Shipments />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
};

export default Components;
