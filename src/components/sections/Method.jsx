import { useTranslation } from 'react-i18next';
import './Method.css';

const ICONS = [
  // graduation cap
  <svg key="teachers" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 3 2 8l10 5 10-5-10-5Z" strokeLinejoin="round" />
    <path d="M6 10.5V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-5.5" strokeLinejoin="round" />
    <path d="M21 8v6" strokeLinecap="round" />
  </svg>,
  // clipboard / personalized plan
  <svg key="learning" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="5" y="4" width="14" height="17" rx="1.5" />
    <path d="M9 3.5h6a1 1 0 0 1 1 1V6H8V4.5a1 1 0 0 1 1-1Z" />
    <path d="M8.5 11h7M8.5 14.5h7M8.5 18h4.5" strokeLinecap="round" />
  </svg>,
  // clock / flexible schedule
  <svg key="schedule" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3.2 2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

function Method() {
  const { t } = useTranslation();
  const items = t('method.items', { returnObjects: true });

  return (
    <section className="method">
      <div className="container">
        <div className="method__header">
          <h2>{t('method.title')}</h2>
          <span className="method__count">{t('method.count')}</span>
        </div>
        <div className="method__grid">
          {items.map((item, index) => (
            <div className="method__item" key={item.title}>
              <div className="method__badges">
                <div className="method__number">{String(index + 1).padStart(2, '0')}</div>
                <div className="method__icon">{ICONS[index % ICONS.length]}</div>
              </div>
              <h3>{item.title}</h3>
              <ul className="method__bullets">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Method;
