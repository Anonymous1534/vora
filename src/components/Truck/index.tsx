import React from "react";
import { Outlet, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

const TruckComponent = () => {
  return (
    <div>
      <div className="overview-page shipments">
        <div className="overview-title">Shipments</div>
        <div className="overview-button">
          <NavLink end to="" className="ovv-btn-items">
            Your Garage
          </NavLink>
          <NavLink to="dealer" className="ovv-btn-items">
            My Dealer
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default TruckComponent;
