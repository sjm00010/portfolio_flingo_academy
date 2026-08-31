import { Navigate } from 'react-router-dom';
import { detectBrowserLanguage } from '../i18n';

function LanguageRedirect() {
  const lang = detectBrowserLanguage();
  return <Navigate to={`/${lang}`} replace />;
}

export default LanguageRedirect;
