import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-component">
      <div className="error-c-img">
        <svg
          width="150px"
          height="150px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="🔍-Product-Icons"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              id="ic_fluent_location_not_found_24_filled"
              fill="#eb5769"
              fill-rule="nonzero"
            >
              <path
                d="M5.84301215,4.55890685 C9.24342264,1.15849636 14.7565774,1.15849636 18.1569879,4.55890685 C21.4893901,7.89130914 21.5560382,13.252791 18.356932,16.6663564 L18.1569879,16.8728826 C17.2419979,17.7878725 15.7116094,19.2826735 13.5641649,21.3589636 C12.6919186,22.2023085 11.3080914,22.2022001 10.4359799,21.3587188 L6.5863078,17.6101042 C6.30208268,17.3299283 6.0543257,17.0841961 5.84301215,16.8728826 C2.44260165,13.4724721 2.44260165,7.95931735 5.84301215,4.55890685 Z M15.0303301,7.68556462 L14.9462117,7.61294646 C14.6852237,7.41929806 14.3270092,7.41690733 14.0636206,7.6057743 L13.9696699,7.68556462 L12,9.6548947 L10.0303301,7.68556462 L9.94621165,7.61294646 C9.68522366,7.41929806 9.32700924,7.41690733 9.0636206,7.6057743 L8.96966991,7.68556462 L8.89705176,7.76968305 C8.70340335,8.03067105 8.70101263,8.38888546 8.8898796,8.65227411 L8.96966991,8.74622479 L10.939,10.7158947 L8.96966991,12.6855646 L8.89705176,12.7696831 C8.70340335,13.030671 8.70101263,13.3888855 8.8898796,13.6522741 L8.96966991,13.7462248 L9.05378835,13.8188429 C9.31477634,14.0124914 9.67299076,14.0148821 9.9363794,13.8260151 L10.0303301,13.7462248 L12,11.7768947 L13.9696699,13.7462248 L14.0537883,13.8188429 C14.3147763,14.0124914 14.6729908,14.0148821 14.9363794,13.8260151 L15.0303301,13.7462248 L15.1029482,13.6621064 C15.2965966,13.4011184 15.2989874,13.0429039 15.1101204,12.7795153 L15.0303301,12.6855646 L13.061,10.7158947 L15.0303301,8.74622479 L15.1029482,8.66210636 C15.2965966,8.40111836 15.2989874,8.04290395 15.1101204,7.7795153 L15.0303301,7.68556462 L14.9462117,7.61294646 L15.0303301,7.68556462 Z"
                id="🎨Color"
              ></path>
            </g>
          </g>
        </svg>
      </div>
      <div className="error-c-text">ไม่พบหน้าที่คุณต้องการ</div>
      <div className="error-c-btn">
        <Link to="/">กลับไปหน้าแรก</Link>
      </div>
    </div>
  );
};

export default Error;
