import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

const ACADEMY_LINK_PATHS = ['about', 'teachers', 'pricing'];

function Footer() {
  const { t } = useTranslation();
  const { lang } = useParams();
  const academyLinks = t('footer.academyLinks', { returnObjects: true });
  const contact = t('footer.contact', { returnObjects: true });

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <p className="footer__logo">
              Flingo <span>Academy</span>
            </p>
            <p className="footer__slogan">Learn English your way</p>
            <p className="footer__tagline">{t('footer.tagline')}</p>
          </div>
          <div>
            <h4>{t('footer.academyTitle')}</h4>
            <ul>
              {academyLinks.map((link, index) => (
                <li key={link}>
                  <Link to={`/${lang}/${ACADEMY_LINK_PATHS[index]}`}>{link}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>{t('footer.contactTitle')}</h4>
            <ul>
              {contact.map((line) => (
                <li key={line}>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>{t('footer.copyright')}</span>
          <div className="footer__social">
            <a href="#">WHATSAPP</a>
            <a href="#">WECHAT</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
