import { Routes, Route } from 'react-router-dom';
import LanguageRedirect from './router/LanguageRedirect';
import ScrollToTop from './router/ScrollToTop';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import TeachersPage from './pages/TeachersPage';
import TeacherProfilePage from './pages/TeacherProfilePage';
import './App.css';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LanguageRedirect />} />
        <Route path="/:lang" element={<HomePage />} />
        <Route path="/:lang/pricing" element={<PricingPage />} />
        <Route path="/:lang/about" element={<AboutPage />} />
        <Route path="/:lang/teachers" element={<TeachersPage />} />
        <Route path="/:lang/teachers/:teacherId" element={<TeacherProfilePage />} />
        <Route path="*" element={<LanguageRedirect />} />
      </Routes>
    </>
  );
}

export default App;
