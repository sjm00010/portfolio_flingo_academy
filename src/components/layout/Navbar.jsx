import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink, useParams, useNavigate, useLocation } from 'react-router-dom';
import { SUPPORTED_LANGUAGES } from '../../i18n';
import './Navbar.css';

function Navbar() {
  const { t } = useTranslation();
  const { lang } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = (nextLang) => {
    const restOfPath = location.pathname.split('/').slice(2).join('/');
    const newPath = restOfPath ? `/${nextLang}/${restOfPath}` : `/${nextLang}`;
    navigate(`${newPath}${location.search}${location.hash}`);
    setIsOpen(false);
  };

  const links = [
    { to: `/${lang}`, label: t('nav.home'), end: true },
    { to: `/${lang}/teachers`, label: t('nav.teachers') },
    { to: `/${lang}/pricing`, label: t('nav.pricing') },
    { to: `/${lang}/about`, label: t('nav.about') },
  ];

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to={`/${lang}`} className="navbar__logo" onClick={() => setIsOpen(false)}>
          Flingo <span>Academy</span>
        </Link>

        <nav className="navbar__links">
          {links.map((link, index) => (
            <span key={link.to} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <NavLink to={link.to} end={link.end}>
                {link.label}
              </NavLink>
              {index < links.length - 1 && <span className="navbar__sep">|</span>}
            </span>
          ))}
        </nav>

        <div className="navbar__actions">
          <div className="lang-switcher">
            {SUPPORTED_LANGUAGES.map((code) => (
              <button
                key={code}
                type="button"
                aria-current={code === lang}
                onClick={() => switchLanguage(code)}
              >
                {t(`languageSwitcher.${code}`)}
              </button>
            ))}
          </div>
          <Link to={`/${lang}/pricing`} className="btn btn--outline">
            {t('nav.cta')}
          </Link>
          <button
            type="button"
            className="navbar__burger"
            aria-label="Menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="container navbar__mobile">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} onClick={() => setIsOpen(false)}>
              {link.label}
            </NavLink>
          ))}
          <div className="lang-switcher">
            {SUPPORTED_LANGUAGES.map((code) => (
              <button
                key={code}
                type="button"
                aria-current={code === lang}
                onClick={() => switchLanguage(code)}
              >
                {t(`languageSwitcher.${code}`)}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
