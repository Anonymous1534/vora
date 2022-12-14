import "./components.scss";
import "./truck.scss";
import "./table.scss";
import Overviews from "./Overviews";
import Shipments from "./Shipments";
import Details from "./Shipments/detials";
import Parcel from "./Parcel";
import Error from "./Error";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Truck from "./Truck/Truck";
import TruckDetail from "./Truck/TruckDetail";
import TruckComponent from "./Truck";
import Dealer from "./Truck/Dealer";

const Components = () => {
  return (
    <div className="main-component">
      <div className="component-body">
        <Routes>
          <Route index element={<Overviews />} />
          <Route path="/dashboard" element={<Overviews />} />
          <Route path="/shipments">
            <Route index element={<Shipments />} />
            <Route path="details" element={<Details />} />
          </Route>
          <Route path="/truck" element={<TruckComponent />}>
            <Route index element={<Truck />} />
            <Route path="dealer" element={<Dealer />} />
          </Route>
          <Route path="/truck-details" element={<TruckDetail />} />
          <Route path="/parcels" element={<Parcel />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
};

export default Components;
