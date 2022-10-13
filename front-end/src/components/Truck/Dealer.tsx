import React from "react";
import { Link } from "react-router-dom";
const Dealer = () => {
  const truckData = [
    {
      id: 1,
      plateNumber: "V4352546",
      model: "IVECO 80E18",
      price: 30000,
    },
  ];

  return (
    <>
      <div className="shipments-component truck-details">
        <div className="shipments-group">
          {truckData.map((truck: any) => {
            return (
              <div className="shipments-card">
                <div className="sc-header">
                  <div className="sc-head-detail">
                    <div className="sc-hl-desination">{truck.model}</div>
                  </div>
                </div>
                <div className="sc-body">
                  <div className="sc-b-detial">
                    <div className="sc-b-items">
                      <div className="sc-bi-field">Price</div>
                      <div className="sc-bi-value">
                        {truck.price} <span>$</span>
                      </div>
                    </div>
                    <div className="sc-b-items">
                      <div className="sc-bi-field">Shipment number</div>
                      <div className="sc-bi-value">{truck.plateNumber}</div>
                    </div>
                    <div className="sc-b-items">
                      <div className="sc-bi-btn">Buy</div>
                    </div>
                  </div>
                  <div className="sc-b-truck-load">
                    <div className="sc-b-truck-panel iveco-80e18">
                      <div className="sc-b-truck-bg"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dealer;
