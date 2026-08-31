import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '../i18n';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Method from '../components/sections/Method';
import Teachers from '../components/sections/Teachers';
import Contact from '../components/sections/Contact';
import CtaBanner from '../components/sections/CtaBanner';
import LanguageRedirect from '../router/LanguageRedirect';

function HomePage() {
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
        <Hero />
        <Method />
        <Teachers id="teachers" />
        <Contact id="contact" />
        <CtaBanner
          titleKey="pricing.ctaTitle"
          noteKey="pricing.ctaNote"
          buttonKey="pricing.ctaButton"
        />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
