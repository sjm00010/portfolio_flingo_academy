import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import './CtaBanner.css';

function CtaBanner({ titleKey = 'cta.title', noteKey = 'cta.note', buttonKey = 'cta.button', href }) {
  const { t } = useTranslation();
  const { lang } = useParams();
  const resolvedHref = href ?? `/${lang}/pricing`;

  return (
    <section className="cta-banner">
      <div className="container cta-banner__inner">
        <div>
          <h2>{t(titleKey)}</h2>
          <div className="cta-banner__note hand">{t(noteKey)}</div>
        </div>
        <Link to={resolvedHref} className="btn btn--light">
          {t(buttonKey)}
        </Link>
      </div>
    </section>
  );
}

export default CtaBanner;
