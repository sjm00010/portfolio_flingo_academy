import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './BoardingPass.css';

const STUB_COUNT = 14;
const DESTINATION_LABEL = 'ENG';

const ORIGIN_LABEL_BY_LANG = { es: 'ESP', zh: 'CHN', en: 'ENG' };
const PASSENGER_NAME_BY_LANG = { es: 'TÚ', zh: '你', en: 'YOU' };
const LOCALE_BY_LANG = { es: 'es-ES', zh: 'zh-CN', en: 'en-US' };

const SEAT_LETTERS = ['A', 'B', 'C', 'D', 'E'];

function randomCode() {
  return String(Math.floor(Math.random() * 99) + 1).padStart(2, '0');
}

function randomSeat() {
  const letter = SEAT_LETTERS[Math.floor(Math.random() * SEAT_LETTERS.length)];
  return `${randomCode()}${letter}`;
}

function formatBoardingTime(date, lang) {
  const locale = LOCALE_BY_LANG[lang] || LOCALE_BY_LANG.en;
  const time = date.toLocaleTimeString(locale, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  const month = date.toLocaleDateString(locale, { month: 'long' }).toUpperCase();
  return `${time} ON ${month} ${date.getFullYear()}`;
}

function BoardingPass({
  airline = 'Flingo',
  price = '45',
  currency = '€',
  classesCount = 'X',
  minutes = 'Y',
  color,
  business = false,
}) {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'en').slice(0, 2);

  const origin = ORIGIN_LABEL_BY_LANG[lang] || ORIGIN_LABEL_BY_LANG.en;
  const passengerName = PASSENGER_NAME_BY_LANG[lang] || PASSENGER_NAME_BY_LANG.en;

  const [gate] = useState(randomCode);
  const [seat] = useState(randomSeat);
  const [flightNumber] = useState(() => `FL-${randomCode()}`);

  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const intervalId = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  const boardingTime = formatBoardingTime(now, lang);

  return (
    <div
      className={`bp-box${business ? ' bp-box--business' : ''}`}
      style={color ? { '--bp-color': color } : undefined}
    >
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
        <span className="bp-boarding">{business ? 'Business pass' : 'Boarding pass'}</span>
        <div className="bp-content">
          <span className="bp-jfk">{origin}</span>
          <span className="bp-plane">
            <PlaneIcon size={60} />
          </span>
          <span className="bp-sfo">{DESTINATION_LABEL}</span>

          <span className="bp-price bp-price--slip">
            {price}
            <span className="bp-price__currency">{currency}</span>
          </span>

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
              CLASES
              <br />
              <span>{classesCount}</span>
            </span>
            <span className="bp-seat bp-seat--slip">
              MINUTES
              <br />
              <span>{minutes}</span>
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
