import { useTranslation } from 'react-i18next';

const BADGE_COLORS = ['f', 'l', 'ingo'];

function splitTitle(title) {
  const idx = title.indexOf('Flingo');
  if (idx === -1) {
    return { before: title, after: '' };
  }
  return { before: title.slice(0, idx), after: title.slice(idx + 6) };
}

function About({ id }) {
  const { t } = useTranslation();
  const items = t('about.items', { returnObjects: true });
  const { before, after } = splitTitle(t('about.title'));

  return (
    <section className="section section--stripes about" id={id}>
      <div className="container">
        <div className="section-header section-header--center">
          <h2 className="about__title">
            {before}
            <span className="about__word"><span className="about__letter about__letter--f">F</span><span className="about__letter about__letter--l">l</span><span className="about__letter about__letter--ingo">ingo</span></span>
            {after}
          </h2>
          <p className="about__lead">{t('about.lead')}</p>
        </div>

        <div className="about__items">
          {items.map((item, index) => {
            const color = BADGE_COLORS[index % BADGE_COLORS.length];
            return (
              <div className={`about__item about__item--${color}`} key={item.title}>
                <div className={`about__badge about__badge--${color}`}>{item.badge}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="about__mission">
          <span className="about__mission-tape" aria-hidden="true" />
          <span className="about__mission-label">{t('about.mission.label')}</span>
          <p>{t('about.mission.text')}</p>
        </div>
      </div>
    </section>
  );
}

export default About;
