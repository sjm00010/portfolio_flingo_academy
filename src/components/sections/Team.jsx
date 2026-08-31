import { useTranslation } from 'react-i18next';
import { TEACHERS } from '../../data/teachers';
import './Founders.css';
import './Team.css';

const TEAM_TEACHER_IDS = ['teacher-cherry', 'teacher-diza'];

function Team({ id }) {
  const { t } = useTranslation();
  const bios = t('about.team.bios', { returnObjects: true });
  const members = TEACHERS.filter((teacher) => TEAM_TEACHER_IDS.includes(teacher.id));

  return (
    <section className="section team" id={id}>
      <div className="container">
        <div className="section-header section-header--center">
          <div className="eyebrow">{t('about.team.eyebrow')}</div>
          <h2 className="section-title">{t('about.team.title')}</h2>
        </div>

        <div className="team__grid">
          {members.map((member) => (
            <div className="founder-card" key={member.id}>
              <div className="founder-card__photo">
                <img src={member.photo} alt={member.name} />
              </div>
              <div className="founder-card__body">
                <h3 className="founder-card__name">{member.name}</h3>
                <div className="founder-card__role mono">{member.role}</div>
                <p className="founder-card__desc">{bios[member.id]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
