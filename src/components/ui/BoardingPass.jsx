import './BoardingPass.css';

const STUB_COUNT = 14;

function BoardingPass({
  airline = 'Postsnap',
  boardingLabel = 'Boarding pass',
  from = 'LHR',
  to = 'SFO',
  passengerName = 'BLOGGS, Joe',
  flightNumber = 'X3-65C3',
  gate = '11B',
  seat = '45A',
  boardingTime = '8:25PM ON AUGUST 2014',
}) {
  return (
    <div className="bp-box">
      <div className="bp-clip" />
      <ul className="bp-left">
        {Array.from({ length: STUB_COUNT }).map((_, i) => (
          <li key={i} />
        ))}
      </ul>

      <ul className="bp-right">
        {Array.from({ length: STUB_COUNT }).map((_, i) => (
          <li key={i} />
        ))}
      </ul>

      <div className="bp-ticket">
        <span className="bp-airline">{airline}</span>
        <span className="bp-airline bp-airline--slip">{airline}</span>
        <span className="bp-boarding">{boardingLabel}</span>
        <div className="bp-content">
          <span className="bp-jfk">{from}</span>
          <span className="bp-plane">
            <PlaneIcon size={60} />
          </span>
          <span className="bp-sfo">{to}</span>

          <span className="bp-jfk bp-jfk--slip">{from}</span>
          <span className="bp-plane bp-plane--slip">
            <PlaneIcon size={50} />
          </span>
          <span className="bp-sfo bp-sfo--slip">{to}</span>

          <div className="bp-sub-content">
            <span className="bp-watermark">{airline}</span>
            <span className="bp-name">
              PASSENGER NAME
              <br />
              <span>{passengerName}</span>
            </span>
            <span className="bp-flight">
              FLIGHT N&deg;
              <br />
              <span>{flightNumber}</span>
            </span>
            <span className="bp-gate">
              GATE
              <br />
              <span>{gate}</span>
            </span>
            <span className="bp-seat">
              SEAT
              <br />
              <span>{seat}</span>
            </span>
            <span className="bp-boardingtime">
              BOARDING TIME
              <br />
              <span>{boardingTime}</span>
            </span>

            <span className="bp-flight bp-flight--slip">
              FLIGHT N&deg;
              <br />
              <span>{flightNumber}</span>
            </span>
            <span className="bp-seat bp-seat--slip">
              SEAT
              <br />
              <span>{seat}</span>
            </span>
            <span className="bp-name bp-name--slip">
              PASSENGER NAME
              <br />
              <span>{passengerName}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlaneIcon({ size }) {
  return (
    <svg
      clipRule="evenodd"
      fillRule="evenodd"
      height={size}
      width={size}
      imageRendering="optimizeQuality"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="#222">
        <line
          fill="none"
          strokeLinecap="round"
          strokeWidth="30"
          x1="300"
          x2="55"
          y1="390"
          y2="390"
        />
        <path
          d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z"
          fill="#222"
          strokeLinejoin="round"
          strokeWidth="10"
        />
      </g>
    </svg>
  );
}

export default BoardingPass;
