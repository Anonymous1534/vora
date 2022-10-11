const Shipments = () => {
  return (
    <>
      <div className="overview-page shipments">
        <div className="overview-title">Shipments</div>
        <div className="overview-button">
          <div className="ovv-btn-items">Arrival (2)</div>
          <div className="ovv-btn-items active">Available (15)</div>
          <div className="ovv-btn-items">Departure (30)</div>
        </div>
      </div>
      <div className="shipments-component">
        <div className="shipments-group">
          <div className="shipments-card">
            <div className="sc-header">
              <div className="sc-head-detail">
                <div className="sc-hl-desination">Barcelona - Valencia</div>
                <div className="sc-hl-time">15 Jun, 2:00 PM</div>
              </div>
              <div className="sc-h-load success">12%</div>
            </div>
            <div className="sc-body">
              <div className="sc-b-detial">
                <div className="sc-b-items">
                  <div className="sc-bi-field">Available , kg</div>
                  <div className="sc-bi-value">
                    20 <span>/200</span>
                  </div>
                </div>
                <div className="sc-b-items">
                  <div className="sc-bi-field">Shipment number</div>
                  <div className="sc-bi-value">V435222</div>
                </div>
                <div className="sc-b-items">
                  <div className="sc-bi-field">Truck</div>
                  <div className="sc-bi-value">IVECO 80E18</div>
                </div>
              </div>
              <div className="sc-b-truck-load">
                <div className="sc-b-truck-panel iveco-80e18">
                  <div className="sc-b-truck-bg"></div>
                  <div
                    className="sc-btp-load-percent"
                    style={{
                      background:
                        "linear-gradient(to right," +
                        "#5dc983" +
                        " " +
                        12 +
                        "%, #e8e8e8 " +
                        12 +
                        "%)",
                    }}
                  ></div>
                  <div className="sc-btp-load-percent-on-top"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="shipments-card">
            <div className="sc-header">
              <div className="sc-head-detail">
                <div className="sc-hl-desination">Barcelona - Valencia</div>
                <div className="sc-hl-time">15 Jun, 2:00 PM</div>
              </div>
              <div className="sc-h-load danger">90%</div>
            </div>
            <div className="sc-body">
              <div className="sc-b-detial">
                <div className="sc-b-items">
                  <div className="sc-bi-field">Available , kg</div>
                  <div className="sc-bi-value">
                    20 <span>/200</span>
                  </div>
                </div>
                <div className="sc-b-items">
                  <div className="sc-bi-field">Shipment number</div>
                  <div className="sc-bi-value">V435222</div>
                </div>
                <div className="sc-b-items">
                  <div className="sc-bi-field">Truck</div>
                  <div className="sc-bi-value">IVECO 80E18</div>
                </div>
              </div>
              <div className="sc-b-truck-load">
                <div className="sc-b-truck-panel iveco-80e18">
                  <div className="sc-b-truck-bg"></div>
                  <div
                    className="sc-btp-load-percent"
                    style={{
                      background:
                        "linear-gradient(to right," +
                        "#eb5769" +
                        " " +
                        90 +
                        "%, #e8e8e8 " +
                        90 +
                        "%)",
                    }}
                  ></div>
                  <div className="sc-btp-load-percent-on-top"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="shipments-card">
            <div className="sc-header">
              <div className="sc-head-detail">
                <div className="sc-hl-desination">Barcelona - Valencia</div>
                <div className="sc-hl-time">15 Jun, 2:00 PM</div>
              </div>
              <div className="sc-h-load warning">65%</div>
            </div>
            <div className="sc-body">
              <div className="sc-b-detial">
                <div className="sc-b-items">
                  <div className="sc-bi-field">Available , kg</div>
                  <div className="sc-bi-value">
                    20 <span>/200</span>
                  </div>
                </div>
                <div className="sc-b-items">
                  <div className="sc-bi-field">Shipment number</div>
                  <div className="sc-bi-value">V435222</div>
                </div>
                <div className="sc-b-items">
                  <div className="sc-bi-field">Truck</div>
                  <div className="sc-bi-value">IVECO 80E18</div>
                </div>
              </div>
              <div className="sc-b-truck-load">
                <div className="sc-b-truck-panel iveco-80e18">
                  <div className="sc-b-truck-bg"></div>
                  <div
                    className="sc-btp-load-percent"
                    style={{
                      background:
                        "linear-gradient(to right," +
                        "#f2af4c" +
                        " " +
                        65 +
                        "%, #e8e8e8 " +
                        65 +
                        "%)",
                    }}
                  ></div>
                  <div className="sc-btp-load-percent-on-top"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="shipments-card">
            <div className="sc-header">
              <div className="sc-head-detail">
                <div className="sc-hl-desination">Barcelona - Valencia</div>
                <div className="sc-hl-time">15 Jun, 2:00 PM</div>
              </div>
              <div className="sc-h-load success">12%</div>
            </div>
            <div className="sc-body">
              <div className="sc-b-detial">
                <div className="sc-b-items">
                  <div className="sc-bi-field">Available , kg</div>
                  <div className="sc-bi-value">
                    20 <span>/200</span>
                  </div>
                </div>
                <div className="sc-b-items">
                  <div className="sc-bi-field">Shipment number</div>
                  <div className="sc-bi-value">V435222</div>
                </div>
                <div className="sc-b-items">
                  <div className="sc-bi-field">Truck</div>
                  <div className="sc-bi-value">IVECO 80E18</div>
                </div>
              </div>
              <div className="sc-b-truck-load">
                <div className="sc-b-truck-panel iveco-80e18">
                  <div className="sc-b-truck-bg"></div>
                  <div
                    className="sc-btp-load-percent"
                    style={{
                      background:
                        "linear-gradient(to right," +
                        "#5dc983" +
                        " " +
                        12 +
                        "%, #e8e8e8 " +
                        12 +
                        "%)",
                    }}
                  ></div>
                  <div className="sc-btp-load-percent-on-top"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="shipments-card">
            <div className="sc-header">
              <div className="sc-head-detail">
                <div className="sc-hl-desination">Barcelona - Valencia</div>
                <div className="sc-hl-time">15 Jun, 2:00 PM</div>
              </div>
              <div className="sc-h-load danger">90%</div>
            </div>
            <div className="sc-body">
              <div className="sc-b-detial">
                <div className="sc-b-items">
                  <div className="sc-bi-field">Available , kg</div>
                  <div className="sc-bi-value">
                    20 <span>/200</span>
                  </div>
                </div>
                <div className="sc-b-items">
                  <div className="sc-bi-field">Shipment number</div>
                  <div className="sc-bi-value">V435222</div>
                </div>
                <div className="sc-b-items">
                  <div className="sc-bi-field">Truck</div>
                  <div className="sc-bi-value">IVECO 80E18</div>
                </div>
              </div>
              <div className="sc-b-truck-load">
                <div className="sc-b-truck-panel iveco-80e18">
                  <div className="sc-b-truck-bg"></div>
                  <div
                    className="sc-btp-load-percent"
                    style={{
                      background:
                        "linear-gradient(to right," +
                        "#eb5769" +
                        " " +
                        90 +
                        "%, #e8e8e8 " +
                        90 +
                        "%)",
                    }}
                  ></div>
                  <div className="sc-btp-load-percent-on-top"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="shipments-card">
            <div className="sc-header">
              <div className="sc-head-detail">
                <div className="sc-hl-desination">Barcelona - Valencia</div>
                <div className="sc-hl-time">15 Jun, 2:00 PM</div>
              </div>
              <div className="sc-h-load warning">65%</div>
            </div>
            <div className="sc-body">
              <div className="sc-b-detial">
                <div className="sc-b-items">
                  <div className="sc-bi-field">Available , kg</div>
                  <div className="sc-bi-value">
                    20 <span>/200</span>
                  </div>
                </div>
                <div className="sc-b-items">
                  <div className="sc-bi-field">Shipment number</div>
                  <div className="sc-bi-value">V435222</div>
                </div>
                <div className="sc-b-items">
                  <div className="sc-bi-field">Truck</div>
                  <div className="sc-bi-value">IVECO 80E18</div>
                </div>
              </div>
              <div className="sc-b-truck-load">
                <div className="sc-b-truck-panel iveco-80e18">
                  <div className="sc-b-truck-bg"></div>
                  <div
                    className="sc-btp-load-percent"
                    style={{
                      background:
                        "linear-gradient(to right," +
                        "#f2af4c" +
                        " " +
                        65 +
                        "%, #e8e8e8 " +
                        65 +
                        "%)",
                    }}
                  ></div>
                  <div className="sc-btp-load-percent-on-top"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="shipments-card">
            <div className="sc-header">
              <div className="sc-head-detail">
                <div className="sc-hl-desination">Barcelona - Valencia</div>
                <div className="sc-hl-time">15 Jun, 2:00 PM</div>
              </div>
              <div className="sc-h-load success">12%</div>
            </div>
            <div className="sc-body">
              <div className="sc-b-detial">
                <div className="sc-b-items">
                  <div className="sc-bi-field">Available , kg</div>
                  <div className="sc-bi-value">
                    20 <span>/200</span>
                  </div>
                </div>
                <div className="sc-b-items">
                  <div className="sc-bi-field">Shipment number</div>
                  <div className="sc-bi-value">V435222</div>
                </div>
                <div className="sc-b-items">
                  <div className="sc-bi-field">Truck</div>
                  <div className="sc-bi-value">IVECO 80E18</div>
                </div>
              </div>
              <div className="sc-b-truck-load">
                <div className="sc-b-truck-panel iveco-80e18">
                  <div className="sc-b-truck-bg"></div>
                  <div
                    className="sc-btp-load-percent"
                    style={{
                      background:
                        "linear-gradient(to right," +
                        "#5dc983" +
                        " " +
                        12 +
                        "%, #e8e8e8 " +
                        12 +
                        "%)",
                    }}
                  ></div>
                  <div className="sc-btp-load-percent-on-top"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="shipments-card">
            <div className="sc-header">
              <div className="sc-head-detail">
                <div className="sc-hl-desination">Barcelona - Valencia</div>
                <div className="sc-hl-time">15 Jun, 2:00 PM</div>
              </div>
              <div className="sc-h-load danger">90%</div>
            </div>
            <div className="sc-body">
              <div className="sc-b-detial">
                <div className="sc-b-items">
                  <div className="sc-bi-field">Available , kg</div>
                  <div className="sc-bi-value">
                    20 <span>/200</span>
                  </div>
                </div>
                <div className="sc-b-items">
                  <div className="sc-bi-field">Shipment number</div>
                  <div className="sc-bi-value">V435222</div>
                </div>
                <div className="sc-b-items">
                  <div className="sc-bi-field">Truck</div>
                  <div className="sc-bi-value">IVECO 80E18</div>
                </div>
              </div>
              <div className="sc-b-truck-load">
                <div className="sc-b-truck-panel iveco-80e18">
                  <div className="sc-b-truck-bg"></div>
                  <div
                    className="sc-btp-load-percent"
                    style={{
                      background:
                        "linear-gradient(to right," +
                        "#eb5769" +
                        " " +
                        90 +
                        "%, #e8e8e8 " +
                        90 +
                        "%)",
                    }}
                  ></div>
                  <div className="sc-btp-load-percent-on-top"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="shipments-card">
            <div className="sc-header">
              <div className="sc-head-detail">
                <div className="sc-hl-desination">Barcelona - Valencia</div>
                <div className="sc-hl-time">15 Jun, 2:00 PM</div>
              </div>
              <div className="sc-h-load warning">65%</div>
            </div>
            <div className="sc-body">
              <div className="sc-b-detial">
                <div className="sc-b-items">
                  <div className="sc-bi-field">Available , kg</div>
                  <div className="sc-bi-value">
                    20 <span>/200</span>
                  </div>
                </div>
                <div className="sc-b-items">
                  <div className="sc-bi-field">Shipment number</div>
                  <div className="sc-bi-value">V435222</div>
                </div>
                <div className="sc-b-items">
                  <div className="sc-bi-field">Truck</div>
                  <div className="sc-bi-value">IVECO 80E18</div>
                </div>
              </div>
              <div className="sc-b-truck-load">
                <div className="sc-b-truck-panel iveco-80e18">
                  <div className="sc-b-truck-bg"></div>
                  <div
                    className="sc-btp-load-percent"
                    style={{
                      background:
                        "linear-gradient(to right," +
                        "#f2af4c" +
                        " " +
                        65 +
                        "%, #e8e8e8 " +
                        65 +
                        "%)",
                    }}
                  ></div>
                  <div className="sc-btp-load-percent-on-top"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="shipments-card">
            <div className="sc-header">
              <div className="sc-head-detail">
                <div className="sc-hl-desination">Barcelona - Valencia</div>
                <div className="sc-hl-time">15 Jun, 2:00 PM</div>
              </div>
              <div className="sc-h-load success">12%</div>
            </div>
            <div className="sc-body">
              <div className="sc-b-detial">
                <div className="sc-b-items">
                  <div className="sc-bi-field">Available , kg</div>
                  <div className="sc-bi-value">
                    20 <span>/200</span>
                  </div>
                </div>
                <div className="sc-b-items">
                  <div className="sc-bi-field">Shipment number</div>
                  <div className="sc-bi-value">V435222</div>
                </div>
                <div className="sc-b-items">
                  <div className="sc-bi-field">Truck</div>
                  <div className="sc-bi-value">IVECO 80E18</div>
                </div>
              </div>
              <div className="sc-b-truck-load">
                <div className="sc-b-truck-panel iveco-80e18">
                  <div className="sc-b-truck-bg"></div>
                  <div
                    className="sc-btp-load-percent"
                    style={{
                      background:
                        "linear-gradient(to right," +
                        "#5dc983" +
                        " " +
                        12 +
                        "%, #e8e8e8 " +
                        12 +
                        "%)",
                    }}
                  ></div>
                  <div className="sc-btp-load-percent-on-top"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="shipments-card">
            <div className="sc-header">
              <div className="sc-head-detail">
                <div className="sc-hl-desination">Barcelona - Valencia</div>
                <div className="sc-hl-time">15 Jun, 2:00 PM</div>
              </div>
              <div className="sc-h-load danger">90%</div>
            </div>
            <div className="sc-body">
              <div className="sc-b-detial">
                <div className="sc-b-items">
                  <div className="sc-bi-field">Available , kg</div>
                  <div className="sc-bi-value">
                    20 <span>/200</span>
                  </div>
                </div>
                <div className="sc-b-items">
                  <div className="sc-bi-field">Shipment number</div>
                  <div className="sc-bi-value">V435222</div>
                </div>
                <div className="sc-b-items">
                  <div className="sc-bi-field">Truck</div>
                  <div className="sc-bi-value">IVECO 80E18</div>
                </div>
              </div>
              <div className="sc-b-truck-load">
                <div className="sc-b-truck-panel iveco-80e18">
                  <div className="sc-b-truck-bg"></div>
                  <div
                    className="sc-btp-load-percent"
                    style={{
                      background:
                        "linear-gradient(to right," +
                        "#eb5769" +
                        " " +
                        90 +
                        "%, #e8e8e8 " +
                        90 +
                        "%)",
                    }}
                  ></div>
                  <div className="sc-btp-load-percent-on-top"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="shipments-card">
            <div className="sc-header">
              <div className="sc-head-detail">
                <div className="sc-hl-desination">Barcelona - Valencia</div>
                <div className="sc-hl-time">15 Jun, 2:00 PM</div>
              </div>
              <div className="sc-h-load warning">65%</div>
            </div>
            <div className="sc-body">
              <div className="sc-b-detial">
                <div className="sc-b-items">
                  <div className="sc-bi-field">Available , kg</div>
                  <div className="sc-bi-value">
                    20 <span>/200</span>
                  </div>
                </div>
                <div className="sc-b-items">
                  <div className="sc-bi-field">Shipment number</div>
                  <div className="sc-bi-value">V435222</div>
                </div>
                <div className="sc-b-items">
                  <div className="sc-bi-field">Truck</div>
                  <div className="sc-bi-value">IVECO 80E18</div>
                </div>
              </div>
              <div className="sc-b-truck-load">
                <div className="sc-b-truck-panel iveco-80e18">
                  <div className="sc-b-truck-bg"></div>
                  <div
                    className="sc-btp-load-percent"
                    style={{
                      background:
                        "linear-gradient(to right," +
                        "#f2af4c" +
                        " " +
                        65 +
                        "%, #e8e8e8 " +
                        65 +
                        "%)",
                    }}
                  ></div>
                  <div className="sc-btp-load-percent-on-top"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shipments;
