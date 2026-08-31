import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

function Hero() {
  const { t } = useTranslation();
  const { lang } = useParams();

  return (
    <section className="hero">
      <div className="container hero__grid">
        <div>
          <div className="eyebrow">{t('hero.eyebrow')}</div>
          <h1 className="hero__word">{t('hero.word')}</h1>
          <div className="hero__phonetic mono">{t('hero.phonetic')}</div>
          <p className="hero__def">
            <b>1.</b> {t('hero.def1')}
          </p>
          <p className="hero__def">
            <b>2.</b> {t('hero.def2')}
          </p>

          <div className="hero__cta-wrap">
            <Link to={`/${lang}/pricing`} className="btn btn--primary">
              {t('hero.ctaButton')}
            </Link>
            <svg viewBox="0 0 180 20" preserveAspectRatio="none">
              <path
                d="M2 10 Q 30 2, 60 10 T 120 10 T 178 8"
                stroke="#C1443C"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span className="hero__note">{t('hero.ctaNote')}</span>
        </div>

        <div className="hero__image-wrap">
          <div className="hero__photo-frame">
            <span className="hero__tape hero__tape--left" aria-hidden="true" />
            <span className="hero__tape hero__tape--right" aria-hidden="true" />
            <img
              className="hero__photo"
              src="/assets/call.png"
              alt={t('hero.photoCaption')}
            />
            <div className="hero__stamp">
              {t('hero.stampLine1')}
              <br />
              {t('hero.stampLine2')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
