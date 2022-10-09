import { Link } from "react-router-dom";
import "./overviews.scss";
import DataTable from "react-data-table-component";

const Overviews = () => {
  const colors = {
    red: "#eb5769",
    orange: "#f2af4c",
    green: "#5dc983",
  };
  const avaliableTruck = [
    {
      plate: "V430303",
      routeFrom: "Barcelana",
      routeTo: "Valencia",
      process: 86,
    },
    {
      plate: "V430303",
      routeFrom: "Barcelana",
      routeTo: "Valencia",
      process: 50,
    },
    {
      plate: "V430303",
      routeFrom: "Barcelana",
      routeTo: "Valencia",
      process: 18,
    },
  ];

  const percentWorkTotals = avaliableTruck.reduce(
    (previousValue, currentValue) => previousValue + currentValue.process,
    0
  );
  const percentWork: any = Number(
    (percentWorkTotals * 100) / (avaliableTruck.length * 100)
  ).toFixed(0);
  const progressStyle = "rotate(" + ((180 * percentWork) / 100 + 45) + "deg)";
  const columns = [
    {
      name: "Destination",
      selector: (row: any) => row.destination,
    },
    {
      name: "Truck",
      selector: (row: any) => row.truck,
    },
    {
      name: "Time arrive",
      selector: (row: any) => row.time_arrive,
    },
  ];

  const selectColor = (percent: any) => {
    let seletedColor;
    switch (true) {
      case percent < 30:
        seletedColor = {
          color: colors.green,
          name: "green",
        };
        break;
      case percent > 85:
        seletedColor = {
          color: colors.red,
          name: "red",
        };
        break;
      default:
        seletedColor = {
          color: colors.orange,
          name: "orange",
        };
        break;
    }
    return seletedColor;
  };

  const data = [
    {
      id: 1,
      destination: "Valencia - Barcelona",
      truck: "B453553",
      time_arrive: "07:49AM",
    },
    {
      id: 2,
      destination: "Valencia - Barcelona",
      truck: "B453553",
      time_arrive: "07:49AM",
    },
    {
      id: 3,
      destination: "Valencia - Barcelona",
      truck: "B453553",
      time_arrive: "07:49AM",
    },
  ];
  return (
    <div className="overview-page">
      <div className="overview-title">Overview</div>
      <div className="overview-box">
        <div className="overview-box-items">
          <div className="obi-left">
            <div className="obi-l-title">New packages</div>
            <div className="obi-l-count">222</div>
          </div>
          <div className="obi-right">
            <div className="obi-i-ico">
              <svg
                width="48px"
                height="48px"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#EF9645"
                  d="M26.992 19.016a3.523 3.523 0 0 0-.875-.636l-.4-1.356l-8.012-.056l-.307 1.091a3.19 3.19 0 0 0-1.393.718l-3.611-3.954a2.335 2.335 0 0 0-1.389 2.133v.96l-4 4.166l.016 2.188l9.984 10.729s10.518-15.288 10.543-15.258c-.127-.224-.511-.703-.556-.725z"
                ></path>
                <g fill="#FFDC5D">
                  <path d="M24.581 18H18c-.208 0-.411.021-.607.061l-.073-.278l-3.273-12.464s-.416-1.957 1.54-2.372c1.956-.416 2.372 1.54 2.372 1.54l3.097 11.569a26.6 26.6 0 0 1 1.305.107l2.061-10.512s.188-1.991 2.18-1.804c1.991.188 1.803 2.179 1.803 2.179L26.34 17.187l-.221 1.194A3.39 3.39 0 0 0 24.581 18zM8.916 16h.168c1.059 0 1.916.858 1.916 1.917v4.166A1.916 1.916 0 0 1 9.084 24h-.168A1.916 1.916 0 0 1 7 22.083v-4.166C7 16.858 7.857 16 8.916 16zm6.918 2.96l-.056.062A2.95 2.95 0 0 0 15 21c0 .063.013.123.018.185c.044.678.308 1.292.728 1.774a2.041 2.041 0 0 1-.259.353A1.97 1.97 0 0 1 14 24a2 2 0 0 1-2-2v-6c0-.441.147-.845.389-1.176A1.993 1.993 0 0 1 14 14a2 2 0 0 1 2 2v2.778c-.061.055-.109.123-.166.182z"></path>
                  <path d="M9.062 25a2.93 2.93 0 0 0 2.45-1.322c.123.183.271.346.431.497c1.185 1.115 3.034 1.044 4.167-.086c.152-.152.303-.305.419-.488l-.003-.003C16.727 23.713 17 24 18 24h2.537a6.35 6.35 0 0 0-1.024 1c-1.228 1.467-2.013 3.606-2.013 6a.5.5 0 0 0 1 0c0-2.548.956-4.775 2.377-6c.732-.631 1.584-1 2.498-1c.713.079.847-1 .125-1H18a2 2 0 0 1 0-4h8c.858 0 1.66.596 1.913 1.415L29 24c.103.335.479 1.871.411 2.191C29.411 31 24.715 36 19 36c-6.537 0-11.844-5.231-11.986-11.734l.014.01a2.909 2.909 0 0 0 1.91.724h.124z"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="overview-box-items">
          <div className="obi-left">
            <div className="obi-l-title">Ready for shipping</div>
            <div className="obi-l-count">60</div>
          </div>
          <div className="obi-right">
            <div className="obi-i-ico">
              <svg
                width="48px"
                height="48px"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  style={{ fill: "#E0B76E" }}
                  points="376.811,187.88 256.003,512 29.001,384.007 29.001,127.997 "
                />
                <polygon
                  style={{ fill: "#A38251" }}
                  points="256.003,0.004 29.001,127.997 256.003,256.002 256.003,512 483.005,127.997 "
                />
                <polygon
                  style={{ fill: "#F2CA7F" }}
                  points="256.003,256.002 256.003,512 483.005,384.007 483.005,127.997 "
                />
                <polygon
                  style={{ fill: "#898686" }}
                  points="402.959,270.659 369.019,247.073 333.995,309.437 359.779,294.939 359.779,400.591 
	377.722,390.471 377.722,284.849 "
                />
                <polygon
                  style={{ fill: "#E0B76E" }}
                  points="321.283,159.537 94.281,31.535 28.995,128.001 255.998,256.003 "
                />
                <polygon
                  style={{ fill: "#F2CA7F" }}
                  points="378.72,130.136 151.716,2.134 255.998,0 483.002,128.001 "
                />
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
          </div>
        </div>
        <div className="overview-box-items">
          <div className="obi-left">
            <div className="obi-l-title">In transit</div>
            <div className="obi-l-count">2 000</div>
          </div>
          <div className="obi-right">
            <div className="obi-i-ico">
              <svg
                width="48px"
                height="48px"
                viewBox="0 0 496.246 496.246"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  style={{ fill: "#1A3D5B" }}
                  d="M471.135,68.332H250.778v6.451c0-15.328-12.446,12.69-27.758,12.69H93.468
	c-15.321,0-27.75,12.43-27.75,27.75L4.427,321.118c0,15.344,12.414,27.758,27.758,27.758h140.753h50.089h248.115
	c6.845,0,12.383-5.537,12.383-12.367V80.699C483.525,73.862,477.98,68.332,471.135,68.332z"
                />
                <path
                  style={{ fill: "#0A2438" }}
                  d="M18.188,274.857L4.419,321.119c0,15.344,12.414,27.758,27.758,27.758H172.93h50.089h248.115
	c6.845,0,12.383-5.537,12.383-12.367v-61.653H18.188z"
                />
                <path
                  style={{ fill: "#528099" }}
                  d="M153.624,114.475H65.788c0,0.252-0.063,0.496-0.063,0.756l-26.734,89.773
	c1.434,0.221,2.867,0.457,4.372,0.457h110.269c15.328,0,27.758-12.43,27.758-27.758v-35.47
	C181.382,126.889,168.952,114.475,153.624,114.475z"
                />
                <path
                  style={{ fill: "#C1E5F4" }}
                  d="M54.91,282.199c0,14.249-3.269,25.813-7.326,25.813c-4.033,0-7.318-11.571-7.318-25.813
	c0-14.281,3.285-25.836,7.318-25.836C51.641,256.362,54.91,267.918,54.91,282.199z"
                />
                <path
                  style={{ fill: "#D9F5FF" }}
                  d="M47.584,308.019c-4.033,0-7.318-11.571-7.318-25.813c0-14.281,3.285-25.836,7.318-25.836"
                />
                <g>
                  <path
                    style={{ fill: "#1D5777" }}
                    d="M108.19,205.462l71.719-71.719c-2.576-7.971-8.554-14.336-16.321-17.337l-89.049,89.056H108.19z"
                  />
                  <path
                    style={{ fill: "#1D5777" }}
                    d="M125.424,205.462h28.199c15.328,0,27.758-12.43,27.758-27.758v-28.199L125.424,205.462z"
                  />
                  <path
                    style={{ fill: "#1D5777" }}
                    d="M93.538,114.475h-27.75c0,0.252-0.063,0.496-0.063,0.756L54.24,153.765L93.538,114.475z"
                  />
                </g>
                <path
                  style={{ fill: "#FFA522" }}
                  d="M496.246,359.944c0,5.711-4.632,10.342-10.342,10.342H10.335C4.608,370.294,0,365.655,0,359.944
	V324.34c0-5.727,4.608-10.342,10.335-10.342h475.569c5.711,0,10.342,4.624,10.342,10.342V359.944z"
                />
                <g>
                  <path
                    style={{ fill: "#FFC41F" }}
                    d="M485.904,313.998H10.335C4.608,313.998,0,318.622,0,324.348v7.845
		c0,5.711,4.608,10.335,10.335,10.335h475.569c5.711,0,10.342-4.632,10.342-10.335v-7.845
		C496.246,318.622,491.615,313.998,485.904,313.998z"
                  />
                  <path
                    style={{ fill: "#FFC41F" }}
                    d="M135.467,376.596c0,19.259-15.644,34.895-34.911,34.895s-34.895-15.628-34.895-34.895
		c0-19.291,15.628-34.926,34.895-34.926S135.467,357.297,135.467,376.596z"
                  />
                </g>
                <path
                  style={{ fill: "#FFA522" }}
                  d="M100.557,341.669c19.267,0,34.911,15.628,34.911,34.926c0,19.259-15.644,34.895-34.911,34.895"
                />
                <path
                  style={{ fill: "#1A3D5B" }}
                  d="M100.557,427.914c-28.302,0-51.326-23.032-51.326-51.326c0-28.325,23.016-51.342,51.326-51.342
	s51.326,23.016,51.326,51.342C151.883,404.882,128.859,427.914,100.557,427.914z M100.557,358.101
	c-10.193,0-18.479,8.302-18.479,18.495c0,10.177,8.287,18.464,18.479,18.464s18.495-8.287,18.495-18.464
	C119.052,366.403,110.75,358.101,100.557,358.101z"
                />
                <circle
                  style={{ fill: "#FFC41F" }}
                  cx="402.038"
                  cy="376.58"
                  r="34.903"
                />
                <path
                  style={{ fill: "#FFA522" }}
                  d="M377.336,351.894c13.627-13.619,35.738-13.619,49.357,0c13.643,13.627,13.627,35.738,0,49.373"
                />
                <path
                  style={{ fill: "#1A3D5B" }}
                  d="M438.319,412.877c-20.023,20.023-52.578,20.023-72.602,0c-20.023-20.023-20.023-52.571,0-72.586
	c20.023-20.039,52.578-20.039,72.602,0C458.327,360.306,458.327,392.854,438.319,412.877z M388.962,363.504
	c-7.223,7.207-7.223,18.928,0,26.136c7.192,7.207,18.913,7.207,26.12,0c7.2-7.207,7.2-18.928,0-26.136
	C407.883,356.313,396.154,356.313,388.962,363.504z"
                />
                <g>
                  <path
                    style={{ fill: "#FFC41F" }}
                    d="M303.206,239.293h-37.053c23.182-22.481,40.669-41.913,40.669-66.19
		c0-20.385-13.257-40.952-42.803-40.952c-13.989,0-27.38,4.813-37.715,13.556c-2.206,1.89-2.922,5.002-1.733,7.656l5.104,11.311
		c0.835,1.843,2.505,3.198,4.49,3.671c1.961,0.473,4.057-0.047,5.616-1.355c3.797-3.174,11.603-8.523,20.953-8.523
		c11.453,0,17.006,5.451,17.006,16.581c-0.15,15.006-12.524,29.168-42.134,57.344l-12.564,12.209
		c-1.26,1.213-1.969,2.907-1.969,4.671v9.838c0,3.592,2.907,6.498,6.514,6.498h75.618c3.616,0,6.514-2.907,6.514-6.498v-13.304
		C309.713,242.2,306.822,239.293,303.206,239.293z"
                  />
                  <path
                    style={{ fill: "#FFC41F" }}
                    d="M404.362,207.762h-10.075v-67.104c0-3.592-2.922-6.498-6.514-6.498h-17.321
		c-2.111,0-4.12,1.048-5.341,2.773l-52.838,75.634c-0.764,1.095-1.174,2.379-1.174,3.718v10.571c0,3.584,2.907,6.491,6.506,6.491
		h48.514v25.765c0,3.592,2.922,6.498,6.522,6.498h15.132c3.592,0,6.514-2.907,6.514-6.498v-25.765h10.075
		c3.584,0,6.491-2.907,6.491-6.491v-12.572C410.852,210.668,407.946,207.762,404.362,207.762z M346.262,207.762l19.858-27.672
		v27.672H346.262z"
                  />
                </g>
                <g>
                  <path
                    style={{ fill: "#FFA522" }}
                    d="M309.713,259.104v-13.304c0-3.592-2.891-6.498-6.514-6.498h-24.773h-12.28
		c23.182-22.481,40.669-41.913,40.669-66.19c0-18.897-11.422-37.935-36.659-40.598c-11.729,1.189-22.764,5.75-31.579,13.202
		c-2.206,1.89-2.922,5.002-1.733,7.656l5.104,11.311c0.079,0.158,0.244,0.244,0.323,0.41c4.246-3.04,10.815-6.617,18.464-6.617
		c2.363,0,4.411,0.284,6.262,0.756c1.914-0.457,3.931-0.756,6.018-0.756c11.453,0,17.006,5.451,17.006,16.581
		c-0.142,15.006-12.516,29.168-42.134,57.344l-12.564,12.209c-1.268,1.213-1.977,2.907-1.977,4.671v9.838
		c0,3.592,2.907,6.498,6.514,6.498h63.338C306.822,265.602,309.713,262.695,309.713,259.104z"
                  />
                  <path
                    style={{ fill: "#FFA522" }}
                    d="M394.287,259.104v-25.765h81.967c3.592,0,6.498-2.907,6.498-6.491v-12.572
		c0-3.608-2.907-6.514-6.498-6.514h-81.967v-67.104c0-3.592-2.922-6.498-6.514-6.498h-5.041c-2.111,0-4.12,1.048-5.341,2.773
		l-52.831,75.634c-0.772,1.095-1.182,2.379-1.182,3.718v10.571c0,3.584,2.907,6.491,6.506,6.491h36.234h12.28v25.765
		c0,3.592,2.922,6.498,6.522,6.498h2.851C391.365,265.602,394.287,262.695,394.287,259.104z M378.407,207.762h-12.28h-7.578h-12.28
		l19.858-27.672v17.101l12.28-17.101V207.762z"
                  />
                  <path
                    style={{ fill: "#FFA522" }}
                    d="M483.037,186.25c0,1.875-1.512,3.395-3.395,3.395h-72.208c-1.875,0-3.395-1.512-3.395-3.395l0,0
		c0-1.859,1.512-3.395,3.395-3.395h72.208C481.524,182.855,483.037,184.383,483.037,186.25L483.037,186.25z"
                  />
                  <path
                    style={{ fill: "#FFA522" }}
                    d="M483.037,167.834c0,1.875-1.512,3.395-3.395,3.395h-72.208c-1.875,0-3.395-1.512-3.395-3.395l0,0
		c0-1.859,1.512-3.395,3.395-3.395h72.208C481.524,164.439,483.037,165.967,483.037,167.834L483.037,167.834z"
                  />
                  <path
                    style={{ fill: "#FFA522" }}
                    d="M483.037,149.417c0,1.875-1.512,3.395-3.395,3.395h-72.208c-1.875,0-3.395-1.512-3.395-3.395l0,0
		c0-1.859,1.512-3.395,3.395-3.395h72.208C481.524,146.022,483.037,147.551,483.037,149.417L483.037,149.417z"
                  />
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
          </div>
        </div>
        <div className="overview-box-items">
          <div className="obi-left">
            <div className="obi-l-title">Delivered</div>
            <div className="obi-l-count">3 600</div>
          </div>
          <div className="obi-right">
            <div className="obi-i-ico">
              <svg
                width="48px"
                height="48px"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  style={{ fill: "#F9D026" }}
                  d="M171.181,340.819c-52.5-52.5-118.497,43.543-118.497,43.543l24.597-7.532l-53.691,63.3l35.351-9.502
	L0,511.999l81.371-58.94l-9.502,35.35l63.299-53.691l-7.532,24.597C127.637,459.316,223.681,393.319,171.181,340.819z"
                />
                <path
                  style={{ fill: "#E7C224" }}
                  d="M171.181,340.819L0,511.999l81.371-58.94l-9.502,35.35l63.299-53.691l-7.532,24.597
	C127.637,459.316,223.681,393.319,171.181,340.819z"
                />
                <polygon
                  style={{ fill: "#F74D37" }}
                  points="183.216,222.837 53.806,201.025 121.794,133.038 251.204,154.849 "
                />
                <polygon
                  style={{ fill: "#C43D2C" }}
                  points="289.163,328.785 310.975,458.195 378.963,390.207 357.151,260.798 "
                />
                <path
                  style={{ fill: "#EDEEF0" }}
                  d="M465.429,159.887C508.154,86.257,512,0.005,512,0.002c0,0-86.254,3.843-159.885,46.57
	c-16.993,9.862-33.312,21.791-47.746,36.225c0,0-135.974,135.974-160.266,160.266c-24.293,24.293-24.9,68.627,15.655,109.182
	c40.555,40.555,84.888,39.947,109.182,15.655c24.292-24.292,160.266-160.266,160.266-160.266
	C443.638,193.199,455.569,176.88,465.429,159.887z"
                />
                <path
                  style={{ fill: "#DCDEE2" }}
                  d="M465.429,159.887C508.154,86.257,512,0.005,512,0.002L408.772,103.23L206.521,305.481l-46.763,46.763
	c40.555,40.555,84.888,39.947,109.182,15.655c24.292-24.292,160.266-160.266,160.266-160.266
	C443.638,193.199,455.569,176.88,465.429,159.887z"
                />
                <path
                  style={{ fill: "#F74D37" }}
                  d="M512,0.002c0,0-86.254,3.843-159.885,46.57l56.657,56.657l56.657,56.657
	C508.154,86.257,512,0.005,512,0.002z"
                />
                <path
                  style={{ fill: "#444242" }}
                  d="M206.52,305.481l-62.418-62.418c-24.293,24.293-24.9,68.627,15.655,109.182
	s84.888,39.947,109.182,15.655L206.52,305.481z"
                />
                <path
                  style={{ fill: "#3A3839" }}
                  d="M268.938,367.899l-62.418-62.418l-46.763,46.763C200.311,392.799,244.646,392.191,268.938,367.899z"
                />
                <circle
                  style={{ fill: "#BCE8F7" }}
                  cx="344.932"
                  cy="167.068"
                  r="40.764"
                />
                <polygon
                  style={{ fill: "#F74D37" }}
                  points="273.048,238.951 273.048,238.951 167.215,314.433 91.733,420.267 91.731,420.268 
	197.566,344.786 "
                />
                <g>
                  <polygon
                    style={{ fill: "#C43D2C" }}
                    points="197.566,344.786 273.048,238.951 273.048,238.951 91.733,420.267 91.731,420.268 	"
                  />
                  <path
                    style={{ fill: "#C43D2C" }}
                    d="M512,0.001L408.772,103.229l56.657,56.657C508.154,86.257,512,0.005,512,0.001z"
                  />
                </g>
                <path
                  style={{ fill: "#8EC1D6" }}
                  d="M373.756,195.894c15.919-15.919,15.919-41.729,0-57.649l-57.649,57.649
	C332.025,211.814,357.836,211.814,373.756,195.894z"
                />
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
          </div>
        </div>
      </div>
      <div className="overview-card-box">
        <div className="ocb-card">
          <div className="ocb-header">
            <div className="ocb-title">Delayed delivery</div>
            <div className="ocb-more">
              <Link to="/">Show all</Link>
            </div>
          </div>
          <div className="ocb-body">
            <div className="ocb-table">
              <DataTable columns={columns} data={data} />
            </div>
          </div>
        </div>
        <div className="ocb-card">
          <div className="ocb-header">
            <div className="ocb-title">Daily plan</div>
          </div>
          <div className="ocb-body">
            <div className="ocb-plan">
              <div className="ocb-plan-left">
                <div className="ocb-pl-items">
                  <div className="ocb-pl-i-group">
                    <div className="ocb-pl-i-title">Shipments processed</div>
                    <div className="ocb-pl-i-counting">
                      1 010 <span>/2 020</span>
                    </div>
                  </div>
                  <div className="ocb-pl-i-group">
                    <div className="ocb-pl-i-title">Orders processed</div>
                    <div className="ocb-pl-i-counting">
                      650 <span>/2 020</span>
                    </div>
                  </div>
                  <div className="ocb-pl-i-group">
                    <div className="ocb-pl-i-title">Requests considered</div>
                    <div className="ocb-pl-i-counting">
                      10 <span>/2 020</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ocb-plan-right">
                <div className="ocb-plan-pgb">
                  <div className="ocb-p-pgb-bar-overflow">
                    <div
                      className="ocb-p-pgb-bar"
                      style={{
                        transform: progressStyle,
                      }}
                    ></div>
                  </div>

                  <span className="left">0%</span>
                  <span className="center">{percentWork}%</span>
                  <span className="right">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ocb-card">
          <div className="ocb-header">
            <div className="ocb-title">Avaliable trucks</div>
            <div className="ocb-more">
              <Link to="/">Show all</Link>
            </div>
          </div>
          <div className="ocb-body">
            {avaliableTruck.map((truck: any) => {
              const seletedColor = selectColor(truck.process);

              return (
                <div className="ocb-truck-avaliable-truck">
                  <div className="ocb-tat-left">
                    <div className="ocb-tat-l-title">{truck.plate}</div>
                    <div className="ocb-tat-l-desc">
                      {truck.routeFrom} - {truck.routeTo}
                    </div>
                  </div>
                  <div className={`ocb-tat-right ${seletedColor.name}`}>
                    <div className="ocb-tat-r-counting">
                      <span>{truck.process}</span>/100%
                    </div>
                    <div className="ocb-tat-r-pgb">
                      <div
                        className="ocb-tat-r-pgb-bar"
                        style={{
                          background:
                            "linear-gradient(to right," +
                            seletedColor.color +
                            " " +
                            truck.process +
                            "%, #e8e8e8 " +
                            truck.process +
                            "%)",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="ocb-card">
          <div className="ocb-header">
            <div className="ocb-title">Recent requests</div>
            <div className="ocb-more">
              <Link to="/">Show all</Link>
            </div>
          </div>
          <div className="ocb-body">
            <div className="ocb-request">
              <div className="ocb-r-group">
                <div className="ocb-r-left">
                  <div className="ocb-rl-ico">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 512 512"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon
                        style={{ fill: "#E0B76E" }}
                        points="376.811,187.88 256.003,512 29.001,384.007 29.001,127.997 "
                      />
                      <polygon
                        style={{ fill: "#A38251" }}
                        points="256.003,0.004 29.001,127.997 256.003,256.002 256.003,512 483.005,127.997 "
                      />
                      <polygon
                        style={{ fill: "#F2CA7F" }}
                        points="256.003,256.002 256.003,512 483.005,384.007 483.005,127.997 "
                      />
                      <polygon
                        style={{ fill: "#898686" }}
                        points="402.959,270.659 369.019,247.073 333.995,309.437 359.779,294.939 359.779,400.591 
	377.722,390.471 377.722,284.849 "
                      />
                      <polygon
                        style={{ fill: "#E0B76E" }}
                        points="321.283,159.537 94.281,31.535 28.995,128.001 255.998,256.003 "
                      />
                      <polygon
                        style={{ fill: "#F2CA7F" }}
                        points="378.72,130.136 151.716,2.134 255.998,0 483.002,128.001 "
                      />
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
                  <div className="ocb-rl-text">
                    <div className="ocb-rl-title">Parcel redirection</div>
                    <div className="ocb-rl-des">
                      Destination Valencia - Barcelrona
                    </div>
                  </div>
                </div>
                <div className="ocb-r-right">
                  <div className="ocb-rr-time">1 min ago</div>
                </div>
              </div>
              <div className="ocb-r-group">
                <div className="ocb-r-left">
                  <div className="ocb-rl-ico">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 512 512"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon
                        style={{ fill: "#E0B76E" }}
                        points="376.811,187.88 256.003,512 29.001,384.007 29.001,127.997 "
                      />
                      <polygon
                        style={{ fill: "#A38251" }}
                        points="256.003,0.004 29.001,127.997 256.003,256.002 256.003,512 483.005,127.997 "
                      />
                      <polygon
                        style={{ fill: "#F2CA7F" }}
                        points="256.003,256.002 256.003,512 483.005,384.007 483.005,127.997 "
                      />
                      <polygon
                        style={{ fill: "#898686" }}
                        points="402.959,270.659 369.019,247.073 333.995,309.437 359.779,294.939 359.779,400.591 
	377.722,390.471 377.722,284.849 "
                      />
                      <polygon
                        style={{ fill: "#E0B76E" }}
                        points="321.283,159.537 94.281,31.535 28.995,128.001 255.998,256.003 "
                      />
                      <polygon
                        style={{ fill: "#F2CA7F" }}
                        points="378.72,130.136 151.716,2.134 255.998,0 483.002,128.001 "
                      />
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
                  <div className="ocb-rl-text">
                    <div className="ocb-rl-title">Parcel redirection</div>
                    <div className="ocb-rl-des">
                      Destination Valencia - Barcelrona
                    </div>
                  </div>
                </div>
                <div className="ocb-r-right">
                  <div className="ocb-rr-time">1 min ago</div>
                </div>
              </div>
              <div className="ocb-r-group">
                <div className="ocb-r-left">
                  <div className="ocb-rl-ico">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 512 512"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon
                        style={{ fill: "#E0B76E" }}
                        points="376.811,187.88 256.003,512 29.001,384.007 29.001,127.997 "
                      />
                      <polygon
                        style={{ fill: "#A38251" }}
                        points="256.003,0.004 29.001,127.997 256.003,256.002 256.003,512 483.005,127.997 "
                      />
                      <polygon
                        style={{ fill: "#F2CA7F" }}
                        points="256.003,256.002 256.003,512 483.005,384.007 483.005,127.997 "
                      />
                      <polygon
                        style={{ fill: "#898686" }}
                        points="402.959,270.659 369.019,247.073 333.995,309.437 359.779,294.939 359.779,400.591 
	377.722,390.471 377.722,284.849 "
                      />
                      <polygon
                        style={{ fill: "#E0B76E" }}
                        points="321.283,159.537 94.281,31.535 28.995,128.001 255.998,256.003 "
                      />
                      <polygon
                        style={{ fill: "#F2CA7F" }}
                        points="378.72,130.136 151.716,2.134 255.998,0 483.002,128.001 "
                      />
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
                  <div className="ocb-rl-text">
                    <div className="ocb-rl-title">Parcel redirection</div>
                    <div className="ocb-rl-des">
                      Destination Valencia - Barcelrona
                    </div>
                  </div>
                </div>
                <div className="ocb-r-right">
                  <div className="ocb-rr-time">1 min ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overviews;
