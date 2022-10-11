import DataTable from "react-data-table-component";

const data = [
  {
    id: 1,
    parcel_number: "V43340340303",
    volume_weight: "24",
    admission_date: "05/05/2026",
  },
  {
    id: 1,
    parcel_number: "V43340340303",
    volume_weight: "24",
    admission_date: "05/05/2026",
  },
  {
    id: 1,
    parcel_number: "V43340340303",
    volume_weight: "24",
    admission_date: "05/05/2026",
  },
  {
    id: 1,
    parcel_number: "V43340340303",
    volume_weight: "24",
    admission_date: "05/05/2026",
  },
  {
    id: 1,
    parcel_number: "V43340340303",
    volume_weight: "24",
    admission_date: "05/05/2026",
  },
  {
    id: 1,
    parcel_number: "V43340340303",
    volume_weight: "24",
    admission_date: "05/05/2026",
  },
  {
    id: 1,
    parcel_number: "V43340340303",
    volume_weight: "24",
    admission_date: "05/05/2026",
  },
  {
    id: 1,
    parcel_number: "V43340340303",
    volume_weight: "24",
    admission_date: "05/05/2026",
  },
  {
    id: 1,
    parcel_number: "V43340340303",
    volume_weight: "24",
    admission_date: "05/05/2026",
  },
  {
    id: 1,
    parcel_number: "V43340340303",
    volume_weight: "24",
    admission_date: "05/05/2026",
  },
];

const columns = [
  {
    name: "Parcel number",
    selector: (row: any) => row.parcel_number,
  },
  {
    name: "Volume weight",
    selector: (row: any) => row.volume_weight,
  },
  {
    name: "Admission date",
    selector: (row: any) => row.admission_date,
  },
];
const details = () => {
  return (
    <>
      <div className="overview-page shipments-details">
        <div className="overview-title">Barcelona - Valencia, V435222</div>
        <div className="overview-time">15 Jun, 2:00 PM</div>
      </div>
      <div className="shipment-details-component">
        <div className="sdc-truck-load">
          <div className="sdc-tl-header">
            <div className="sdc-tl-h-name">Truck load</div>
            <div className="sdc-tl-h-percent success">12%</div>
          </div>
          <div className="sdc-tl-truck">
            <div className="sdc-tl-truck-load">
              <div className="sdc-tltl-field">Available, kg</div>
              <div className="sdc-tltl-value">
                42 / <span>400</span>
              </div>
            </div>
            <div className="sdc-tl-truck-img">
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
          <div className="sdc-tl-parcel-box">
            <div className="sdc-tl-pb-title">Parcels</div>
            <div className="sdc-tl-pb-box">
              <div className="box full"></div>
              <div className="box selected"></div>
              <div className="box"></div>
              <div className="box full"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box full"></div>
              <div className="box"></div>
              <div className="box full"></div>
              <div className="box full"></div>
              <div className="box full"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
            </div>
          </div>
          <div className="sdc-tl-parcel-controls">
            <div className="sdc-tl-parcel-view-list btn-full">
              <div className="stpvl-icon">
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 201.607 201.607"
                  version="1.1"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <g>
                      <path
                        d="M59.584,4.305L0,51.099v146.203h146.189v-0.351l55.311-49.184V4.491l0.107-0.186H59.584z
			 M61.535,9.806h57.068L73.252,51.099H10.529L61.535,9.806z M140.695,191.805H5.504V56.61h135.191V191.805z M142.374,51.099H81.43
			l45.355-41.293h60.669L142.374,51.099z M195.999,145.291l-49.807,44.285V55.064l49.807-45.623V145.291z"
                      />
                      <rect
                        x="49.553"
                        y="75.882"
                        width="49.088"
                        height="5.501"
                      />
                    </g>
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
              </div>
              <div className="stpvl-text">View parcel list</div>
            </div>
            <div className="sdc-tl-parcel-view-list btn-outline">
              <div className="stpvl-icon">
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 487.4 487.4"
                  version="1.1"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="M381.6,144.1h-63.3V25.9H0v369.2h33.2c1.1,36.4,31.8,66.4,68.4,66.4s67.3-30,68.4-66.4h154.6c1.1,36.4,31.8,66.4,68.4,66.4   s67.3-30,68.4-66.4h26V251L381.6,144.1z M101.6,440.7c-25.9,0-47.7-21.8-47.7-47.7s21.8-47.7,47.7-47.7s47.7,21.8,47.7,47.7   S127.5,440.7,101.6,440.7z M297.6,374.4H167.4c-8.3-28.5-34.9-49.8-65.8-49.8s-57.5,21.3-65.8,49.8H20.7V46.6h276.9V374.4z    M387.9,179.6l65.5,66.2h-65.5V179.6z M393,440.7c-25.9,0-47.7-21.8-47.7-47.7s21.8-47.7,47.7-47.7s47.7,21.8,47.7,47.7   S419,440.7,393,440.7z M466.7,374.4h-7.9l0,0c-8.3-28.5-34.9-49.8-65.8-49.8s-57.5,21.3-65.8,49.8h-7.9V164.9H367v101.6h99.7V374.4   z" />
                  </g>
                </svg>
              </div>
              <div className="stpvl-text">Finish loading</div>
            </div>
          </div>
        </div>
        <div className="sdc-truck-parcel-available">
          <div className="sdc-tpa-table">
            <DataTable columns={columns} data={data} selectableRows />
          </div>
        </div>
      </div>
    </>
  );
};

export default details;
