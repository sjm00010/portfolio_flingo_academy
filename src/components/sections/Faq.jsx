import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Faq.css';

function Faq() {
  const { t } = useTranslation();
  const faqs = t('pricing.faqs', { returnObjects: true });
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section section--stripes">
      <div className="container">
        <div className="section-header section-header--center">
          <div className="eyebrow">{t('pricing.faqEyebrow')}</div>
          <h2 className="section-title">{t('pricing.faqTitle')}</h2>
        </div>

        <div className="faq">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;
            return (
              <div className="faq-item" key={faq.q}>
                <button
                  type="button"
                  className="faq-item__question"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-item__icon">{isOpen ? '−' : '+'}</span>
                  <span>{faq.q}</span>
                </button>
                {isOpen && <div className="faq-item__answer">{faq.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Faq;
