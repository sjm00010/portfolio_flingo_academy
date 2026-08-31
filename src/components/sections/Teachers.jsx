import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { TEACHERS } from '../../data/teachers';

const PIN_COLORS = ['red', 'navy', 'green', 'brown'];

function Teachers({ id }) {
  const { t } = useTranslation();
  const { lang } = useParams();

  return (
    <section className="section section--stripes" id={id}>
      <div className="container">
        <div className="section-header section-header--center">
          <div className="eyebrow">{t('teachers.eyebrow')}</div>
          <h2 className="section-title">{t('teachers.title')}</h2>
        </div>

        <div className="teachers__grid">
          {TEACHERS.map((teacher, index) => {
            const pin = PIN_COLORS[index % PIN_COLORS.length];

            return (
              <Link
                to={`/${lang}/teachers/${teacher.id}`}
                className={`teacher-tile teacher-tile--polaroid teacher-tile--pin-${pin}`}
                key={teacher.id}
              >
                <span className="teacher-tile__pin" aria-hidden="true" />
                <div className="teacher-tile__photo">
                  <img src={teacher.photo} alt={teacher.name} className="teacher-tile__img" />
                  <span className="teacher-tile__cta">{t('teachers.viewProfile')} →</span>
                </div>
                <div className="teacher-tile__caption">
                  <div className="teacher-tile__name">{teacher.name}</div>
                  <div className="teacher-tile__role">{teacher.role}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Teachers;
