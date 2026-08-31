import { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '../i18n';
import { getTeacherById, getOtherTeachers } from '../data/teachers';
import { WHATSAPP_LINK, WECHAT_LINK } from '../constants/contact';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ImageZoomModal from '../components/ui/ImageZoomModal';
import LanguageRedirect from '../router/LanguageRedirect';
import './TeacherProfilePage.css';

function TeacherProfilePage() {
  const { lang, teacherId } = useParams();
  const { t, i18n } = useTranslation();
  const [zoomedCertificate, setZoomedCertificate] = useState(null);
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

  const profiles = t('teachers.profiles', { returnObjects: true });
  const profile = profiles[teacher.id];
  const otherTeachers = getOtherTeachers(teacher.id);
  const messageLink = lang === 'zh' ? WECHAT_LINK : WHATSAPP_LINK;
  const certificates = teacher.certificates.map((src, index) => ({
    src,
    title: profile.certificates[index],
  }));

  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <div className="dossier-label">
            {t('teacherProfile.dossierLabel', { number: teacher.number })}
          </div>
          <div className="dossier">
            <div className="dossier__photo-col">
              <img src={teacher.photo} alt={profile.name} className="dossier__photo" />
            </div>

            <div className="dossier__content">
              <h1 className="dossier__name">{profile.name}</h1>
              <div className="dossier__subtitle mono">{profile.role}</div>

              {profile.tags.length > 0 && (
                <div className="dossier__tags">
                  {profile.tags.map((tag) => (
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

              {certificates.length > 0 && (
                <>
                  <h3>{t('teacherProfile.certificatesTitle')}</h3>
                  <div className="dossier__certificates">
                    {certificates.map((certificate) => (
                      <button
                        type="button"
                        key={certificate.src}
                        onClick={() => setZoomedCertificate(certificate)}
                      >
                        <img
                          src={certificate.src}
                          alt={certificate.title}
                          onLoad={(event) => {
                            const { naturalWidth, naturalHeight } = event.target;
                            event.target.classList.toggle('is-landscape', naturalWidth > naturalHeight);
                          }}
                        />
                        <span>{certificate.title}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {otherTeachers.length > 0 && (
              <div className="dossier__similar-col">
                <h3>{t('teacherProfile.similarTitle')}</h3>
                <div className="similar-teachers">
                  {otherTeachers.map((otherTeacher) => {
                    const otherProfile = profiles[otherTeacher.id];
                    return (
                      <Link
                        to={`/${lang}/teachers/${otherTeacher.id}`}
                        className="similar-teacher"
                        key={otherTeacher.id}
                      >
                        <img
                          src={otherTeacher.photo}
                          alt={otherProfile.name}
                          className="similar-teacher__avatar"
                        />
                        <div>
                          <strong>{otherProfile.name.toUpperCase()}</strong>
                          <span>{otherProfile.role}</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
      {zoomedCertificate && (
        <ImageZoomModal
          src={zoomedCertificate.src}
          alt={zoomedCertificate.title}
          onClose={() => setZoomedCertificate(null)}
        />
      )}
    </>
  );
}

export default TeacherProfilePage;
