import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '../i18n';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import About from '../components/sections/About';
import Founders from '../components/sections/Founders';
import Team from '../components/sections/Team';
import CtaBanner from '../components/sections/CtaBanner';
import LanguageRedirect from '../router/LanguageRedirect';

function AboutPage() {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const isValidLanguage = SUPPORTED_LANGUAGES.includes(lang);

  useEffect(() => {
    if (!isValidLanguage) return;
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
  }, [lang, isValidLanguage, i18n]);

  if (!isValidLanguage) {
    return <LanguageRedirect />;
  }

  return (
    <>
      <Navbar />
      <main>
        <About />
        <Founders />
        <Team />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}

export default AboutPage;
