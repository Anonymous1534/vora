import React from "react";
import { Link, NavLink } from "react-router-dom";
const Truck = () => {
  const truckData = [
    {
      id: 1,
      plateNumber: "V435222",
      mileRate: 1003,
      model: "IVECO 80E18",
      status: "available",
    },
    {
      id: 2,
      plateNumber: "V435223",
      mileRate: 2234,
      model: "IVECO 80E18",
      status: "departure",
    },
    {
      id: 3,
      plateNumber: "V435224",
      mileRate: 123,
      model: "IVECO 80E18",
      status: "maintainance",
    },
  ];

  return (
    <>
      <div className="shipments-component truck-details">
        <div className="shipments-group">
          {truckData.map((truck: any) => {
            return (
              <Link
                to="/truck-details"
                className={`shipments-card ${truck.status}`}
              >
                <div className="sc-header">
                  <div className="sc-head-detail">
                    <div className="sc-hl-desination">{truck.model}</div>
                    <div className="sc-hl-time truck-details">
                      {truck.status}
                    </div>
                  </div>
                </div>
                <div className="sc-body">
                  <div className="sc-b-detial">
                    <div className="sc-b-items">
                      <div className="sc-bi-field">Mile rate</div>
                      <div className="sc-bi-value">
                        {truck.mileRate} <span>km</span>
                      </div>
                    </div>
                    <div className="sc-b-items">
                      <div className="sc-bi-field">Shipment number</div>
                      <div className="sc-bi-value">{truck.plateNumber}</div>
                    </div>
                    <div className="sc-b-items">
                      <div className="sc-bi-field">Truck</div>
                      <div className="sc-bi-value">{truck.model}</div>
                    </div>
                  </div>
                  <div className="sc-b-truck-load">
                    <div className="sc-b-truck-panel iveco-80e18">
                      <div className="sc-b-truck-bg"></div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Truck;
