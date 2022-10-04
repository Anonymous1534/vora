import "./sidebar.scss";
import logo from "../assets/logo.png";
import profileImg from "../assets/profile.jpeg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar-main">
      <div className="sidebar-top">
        <div className="sm-logo">
          <img src={logo} className="sm-logo-files" />
          <div className="sm-lg-company">
            <div className="sm-lg-com-title">Courier</div>
            <div className="sm-lg-com-desc">Workspace</div>
          </div>
        </div>
        <div className="sm-menus header-menus">
          <div className="sm-sm-items">
            <Link to="/">
              <div className="smsm-i-left">
                <div className="smsm-i-ico">
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 36 36"
                    version="1.1"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>notification-line</title>
                    <path d="M32.51,27.83A14.4,14.4,0,0,1,30,24.9a12.63,12.63,0,0,1-1.35-4.81V15.15A10.81,10.81,0,0,0,19.21,4.4V3.11a1.33,1.33,0,1,0-2.67,0V4.42A10.81,10.81,0,0,0,7.21,15.15v4.94A12.63,12.63,0,0,1,5.86,24.9a14.4,14.4,0,0,1-2.47,2.93,1,1,0,0,0-.34.75v1.36a1,1,0,0,0,1,1h27.8a1,1,0,0,0,1-1V28.58A1,1,0,0,0,32.51,27.83ZM5.13,28.94a16.17,16.17,0,0,0,2.44-3,14.24,14.24,0,0,0,1.65-5.85V15.15a8.74,8.74,0,1,1,17.47,0v4.94a14.24,14.24,0,0,0,1.65,5.85,16.17,16.17,0,0,0,2.44,3Z"></path>
                    <path d="M18,34.28A2.67,2.67,0,0,0,20.58,32H15.32A2.67,2.67,0,0,0,18,34.28Z"></path>
                    <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
                  </svg>
                </div>
                <div className="smsm-i-text">Notifications</div>
              </div>
              <div className="smsm-i-right">
                <div className="smsm-ir-badge">10</div>
              </div>
            </Link>
          </div>
        </div>
        <div className="sm-menus main-menus">
          <div className="sm-sm-items">
            <Link to="/dashboard">
              <div className="smsm-i-left">
                <div className="smsm-i-ico">
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 475.037 475.037"
                    version="1.1"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g transform="translate(0 -540.36)">
                      <g>
                        <g>
                          <path
                            d="M475.018,775.088c-0.4-62.9-25.5-122.1-70.8-166.5c-45.6-44.8-105.8-69-169.5-68.2c-131,1.6-236.3,109.4-234.7,240.3
				c0.8,63.5,26.2,122.9,71.5,167.2c44.7,43.6,103.4,67.5,165.8,67.5c1,0,2,0,3,0c63.1-0.4,122.3-25.5,166.6-70.6
				C451.618,899.288,475.818,838.988,475.018,775.088z M396.218,934.188c-41.5,42.3-96.9,65.7-156.1,66.1
				c-59.4,0.7-115.6-21.7-158.1-63.2c-42.5-41.4-66.3-97.1-67-156.6c-1.5-122.6,97.1-223.6,219.9-225.1c0.9,0,1.9,0,2.8,0
				c58.6,0,114,22.6,156,63.9c42.4,41.6,65.9,97,66.3,155.9C460.718,835.088,438.118,891.588,396.218,934.188z"
                          />
                          <path
                            d="M342.518,610.388c-31.5-19.8-67.9-30.3-105.1-30.3s-73.5,10.5-105.1,30.3c-31.6,19.8-56.9,48.1-73.1,81.7
				c-1.8,3.7-0.2,8.2,3.5,10c3.7,1.8,8.2,0.2,10-3.5c30.4-62.9,95-103.6,164.7-103.6c69.7,0,134.4,40.7,164.7,103.6
				c1.3,2.6,4,4.2,6.8,4.2h0c1.1,0,2.2-0.2,3.2-0.7c3.7-1.8,5.3-6.3,3.5-10C399.318,658.488,374.118,630.288,342.518,610.388z"
                          />
                          <path
                            d="M312.118,691.888l-77.6,77.6c-2.9,2.9-2.9,7.7,0,10.6c1.5,1.5,3.4,2.2,5.3,2.2c2,0,3.9-0.7,5.3-2.2l77.6-77.6
				c2.9-2.9,2.9-7.7,0-10.6C319.818,688.988,315.018,688.988,312.118,691.888z"
                          />
                          <path
                            d="M277.018,770.388c-4.1,0-7.5,3.4-7.5,7.5c0,17.3-14.1,31.4-32.2,32.1c-17.6-0.1-31.9-14.1-31.9-31.3c0-0.1,0-0.2,0-0.3
				c-0.3-8.6,2.9-17.1,8.9-23.3c5.8-6,13.4-9.3,21.6-9.3c4.1,0,7.5-3.4,7.5-7.5s-3.4-7.5-7.5-7.5c-12.3,0-23.8,5-32.4,13.9
				c-8.7,9.1-13.5,21.5-13.1,34.1c0.1,25.5,21.2,46.2,47.1,46.2l0,0c0.1,0,0.2,0,0.2,0c26.2-1,46.8-21.7,46.8-47.1
				C284.518,773.788,281.118,770.388,277.018,770.388z"
                          />
                        </g>
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
                <div className="smsm-i-text">Dashboard</div>
              </div>
              <div className="smsm-i-right"></div>
            </Link>
          </div>
          <div className="sm-sm-items">
            <Link to="/shipments">
              <div className="smsm-i-left">
                <div className="smsm-i-ico">
                  <svg
                    width="20px"
                    height="20px"
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
                <div className="smsm-i-text">Shipments</div>
              </div>
              <div className="smsm-i-right"></div>
            </Link>
          </div>
          <div className="sm-sm-items">
            <Link to="parcels">
              <div className="smsm-i-left">
                <div className="smsm-i-ico">
                  <svg
                    width="20px"
                    height="20px"
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
                <div className="smsm-i-text">Parcels</div>
              </div>
              <div className="smsm-i-right">
                <div className="smsm-ir-badge danger">2</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="sidebar-bottom">
        <div className="sb-usr-left">
          <div className="sb-usr-img">
            <img src={profileImg} />
          </div>
          <div className="sb-usr-info">
            <div className="sbusr-info-name">Boonyarit (Jay)</div>
            <div className="sbusr-info-role">Manager</div>
          </div>
        </div>
        <div className="sb-usr-right">
          <div className="sb-usr-kebab">
            <a href="#">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                version="1.1"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_105_1881)">
                  <rect
                    height="0.01"
                    stroke="#292929"
                    stroke-linejoin="round"
                    stroke-width="3"
                    transform="rotate(90 12.01 12)"
                    width="0.01"
                    x="12.01"
                    y="12"
                  />
                  <rect
                    height="0.01"
                    stroke="#292929"
                    stroke-linejoin="round"
                    stroke-width="3"
                    transform="rotate(90 19.01 12)"
                    width="0.01"
                    x="19.01"
                    y="12"
                  />
                  <rect
                    height="0.01"
                    stroke="#292929"
                    stroke-linejoin="round"
                    stroke-width="3"
                    transform="rotate(90 5.01001 12)"
                    width="0.01"
                    x="5.01001"
                    y="12"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
