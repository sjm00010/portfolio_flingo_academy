import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '../i18n';
import { getTeacherById, getOtherTeachers } from '../data/teachers';
import { WHATSAPP_LINK, WECHAT_LINK } from '../constants/contact';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import LanguageRedirect from '../router/LanguageRedirect';
import './TeacherProfilePage.css';

function TeacherProfilePage() {
  const { lang, teacherId } = useParams();
  const { t, i18n } = useTranslation();
  const isValidLanguage = SUPPORTED_LANGUAGES.includes(lang);

  useEffect(() => {
    if (!isValidLanguage) return;
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
  }, [lang, isValidLanguage, i18n]);

  if (!isValidLanguage) {
    return <LanguageRedirect />;
  }

  const teacher = getTeacherById(teacherId);
  if (!teacher) {
    return <Navigate to={`/${lang}`} replace />;
  }

  const otherTeachers = getOtherTeachers(teacher.id);
  const messageLink = lang === 'zh' ? WECHAT_LINK : WHATSAPP_LINK;

  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <div className="dossier-label">
            {t('teacherProfile.dossierLabel', { number: teacher.number })}
          </div>
          <div className="dossier">
            <div>
              <img src={teacher.photo} alt={teacher.name} className="dossier__photo" />
            </div>

            <div>
              <h1 className="dossier__name">{teacher.name}</h1>
              <div className="dossier__subtitle mono">{teacher.role}</div>

              {teacher.tags.length > 0 && (
                <div className="dossier__tags">
                  {teacher.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              )}

              <div className="dossier__actions">
                <Link to={`/${lang}/pricing`} className="btn btn--primary">
                  {t('teacherProfile.bookButton')}
                </Link>
                <a
                  href={messageLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--ghost"
                >
                  {t('teacherProfile.messageButton')}
                </a>
              </div>

              {otherTeachers.length > 0 && (
                <>
                  <h3>{t('teacherProfile.similarTitle')}</h3>
                  <div className="similar-teachers">
                    {otherTeachers.map((otherTeacher) => (
                      <Link
                        to={`/${lang}/teachers/${otherTeacher.id}`}
                        className="similar-teacher"
                        key={otherTeacher.id}
                      >
                        <img
                          src={otherTeacher.photo}
                          alt={otherTeacher.name}
                          className="similar-teacher__avatar"
                        />
                        <div>
                          <strong>{otherTeacher.name.toUpperCase()}</strong>
                          <span>{otherTeacher.role}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default TeacherProfilePage;
