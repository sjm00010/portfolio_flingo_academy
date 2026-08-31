import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '../i18n';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Pricing from '../components/sections/Pricing';
import Faq from '../components/sections/Faq';
import CtaBanner from '../components/sections/CtaBanner';
import LanguageRedirect from '../router/LanguageRedirect';

function PricingPage() {
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
        <Pricing />
        <Faq />
        <CtaBanner
          titleKey="pricing.ctaTitle"
          noteKey="pricing.ctaNote"
          buttonKey="pricing.ctaButton"
          href="#"
        />
      </main>
      <Footer />
    </>
  );
}

export default PricingPage;
