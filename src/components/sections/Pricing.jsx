import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Pricing({ id }) {
  const { t } = useTranslation();
  const plans = t('pricing.plans', { returnObjects: true });
  const [billing, setBilling] = useState('monthly');

  return (
    <section className="section" id={id}>
      <div className="container">
        <div className="pricing-hero">
          <div className="eyebrow">{t('pricing.eyebrow')}</div>
          <h1>{t('pricing.title')}</h1>
          <p>{t('pricing.subtitle')}</p>
          <div className="pricing-toggle">
            <span
              className={billing === 'monthly' ? 'is-active' : ''}
              onClick={() => setBilling('monthly')}
              role="button"
              tabIndex={0}
            >
              {t('pricing.monthly')}
            </span>
            <span
              className={billing === 'annual' ? 'is-active' : ''}
              onClick={() => setBilling('annual')}
              role="button"
              tabIndex={0}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              {t('pricing.annual')} <span className="discount">{t('pricing.discount')}</span>
            </span>
          </div>
        </div>

        <div className="pricing__grid">
          {plans.map((plan) => (
            <div
              className={`pricing-card ${plan.featured ? 'pricing-card--featured' : ''}`}
              key={plan.id}
            >
              {plan.badge && <span className="pricing-card__badge">{plan.badge}</span>}
              <div className="pricing-card__eyebrow mono">{plan.number}</div>
              <h3 className="pricing-card__name">{plan.name}</h3>
              <div className="pricing-card__price">
                {plan.price}
                <span> {t('pricing.perMonth')}</span>
              </div>
              <div className="pricing-card__divider" />
              <div className="pricing-card__features">
                {plan.features.map((feature) => (
                  <div key={feature}>✓ {feature}</div>
                ))}
              </div>
              <a
                href="#"
                className={`btn btn--full ${plan.featured ? 'btn--light' : 'btn--ghost'}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
