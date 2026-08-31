import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import TicketCard from '../ui/TicketCard';
import './Pricing.css';

const BRAND = 'FLINGO ACADEMY';

const SINGLE_LESSON_VARIANTS = {
  short: 'green',
  normal: 'navy',
  ielts: 'red',
};

const PACKAGE_VARIANTS = {
  packageA: 'green',
  packageB: 'navy',
  packageC: 'red',
};

function Pricing({ id }) {
  const { t } = useTranslation();
  const singleLessons = t('pricing.singleLessons', { returnObjects: true });
  const packagesSection = t('pricing.packagesSection', { returnObjects: true });
  const ticketLabel = t('pricing.ticketLabel');
  const [billing, setBilling] = useState('individual');

  return (
    <section className="section" id={id}>
      <div className="container">
        <div className="pricing-hero">
          <div className="eyebrow">{t('pricing.eyebrow')}</div>
          <h1>{t('pricing.title')}</h1>
          <p>{t('pricing.subtitle')}</p>
          <div className="pricing-toggle">
            <span
              className={billing === 'individual' ? 'is-active' : ''}
              onClick={() => setBilling('individual')}
              role="button"
              tabIndex={0}
            >
              {t('pricing.individual')}
            </span>
            <span
              className={billing === 'packages' ? 'is-active' : ''}
              onClick={() => setBilling('packages')}
              role="button"
              tabIndex={0}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              {t('pricing.packages')} <span className="discount">{t('pricing.discount')}</span>
            </span>
          </div>
        </div>

        {billing === 'individual' ? (
          <div className="pricing__grid">
            {singleLessons.plans.map((plan) => (
              <TicketCard
                key={plan.id}
                variant={SINGLE_LESSON_VARIANTS[plan.id]}
                brand={BRAND}
                eyebrow={ticketLabel}
                icon={plan.icon}
                title={plan.name}
                price={plan.price}
                currency={plan.currency}
                description={plan.description}
              />
            ))}
          </div>
        ) : (
          <>
            <p className="pricing-packages__subtitle">{packagesSection.subtitle}</p>
            <div className="pricing__grid">
              {packagesSection.groups.map((group) => (
                <TicketCard
                  key={group.id}
                  variant={PACKAGE_VARIANTS[group.id]}
                  featured={group.featured}
                  brand={BRAND}
                  eyebrow={group.badge}
                  title={group.name}
                  tiers={group.tiers}
                  bestValueLabel={packagesSection.bestValue}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Pricing;
