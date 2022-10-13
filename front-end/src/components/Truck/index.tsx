import React from "react";
import { Outlet, Route } from "react-router-dom";

const TruckComponent = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default TruckComponent;
