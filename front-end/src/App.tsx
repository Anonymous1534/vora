import Sidebar from "./sidebar";
import Content from "./content";
import { useState } from "react";

const App = () => {
  const [activeSideBar, SetActiveSideBar] = useState(true);
  console.log("🚀 ~ activeSideBar", activeSideBar);

  const toggleSideBar = () => {
    SetActiveSideBar(!activeSideBar);
  };

  return (
    <div className="main">
      <div className={`main-left ${activeSideBar ? "active" : ""}`}>
        <div className="button-sidebar" onClick={toggleSideBar}>
          <svg
            width="48px"
            height="48px"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" fill="white" fill-opacity="0.01" />
            <path
              d="M19 12L31 24L19 36"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <Sidebar />
      </div>
      <div className="main-right">
        <Content />
      </div>
    </div>
  );
};

export default App;
