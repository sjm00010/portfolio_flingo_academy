import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import BoardingPass from '../ui/BoardingPass';
import './Pricing.css';

const MINUTES_BY_PLAN_ID = {
  short: '25',
  normal: '55',
  ielts: '55',
};

const COLOR_BY_PLAN_ID = {
  short: 'var(--color-green)',
  normal: 'var(--color-navy)',
  ielts: 'var(--color-red)',
};

const PLAN_ID_BY_GROUP_ID = {
  packageA: 'short',
  packageB: 'normal',
  packageC: 'ielts',
};

const GROUP_ID_BY_PLAN_ID = {
  short: 'packageA',
  normal: 'packageB',
  ielts: 'packageC',
};

function extractClassesCount(label) {
  const matches = label.match(/\d+/g);
  return matches ? matches.join(' + ') : 'X';
}

function Pricing({ id }) {
  const { t } = useTranslation();
  const singleLessons = t('pricing.singleLessons', { returnObjects: true });
  const packagesSection = t('pricing.packagesSection', { returnObjects: true });
  const selectorLabels = t('pricing.selectorLabels', { returnObjects: true });
  const [billing, setBilling] = useState('individual');
  const [selectedTypeId, setSelectedTypeId] = useState('normal');

  const selectedPlan = singleLessons.plans.find((plan) => plan.id === selectedTypeId);
  const selectedGroup = packagesSection.groups.find(
    (group) => group.id === GROUP_ID_BY_PLAN_ID[selectedTypeId],
  );

  return (
    <section className="section" id={id}>
      <div className="container">
        <div className="pricing-hero">
          <div className="eyebrow">{t('pricing.eyebrow')}</div>
          <h1>{t('pricing.title')}</h1>
          <p>{t('pricing.subtitle')}</p>
          <div className="pricing-toggle-wrap">
            <span className="pricing-toggle__badge">{t('pricing.discount')}</span>
            <div
              className={`pricing-toggle${billing === 'packages' ? ' pricing-toggle--packages' : ''}`}
            >
              <span className="pricing-toggle__thumb" aria-hidden="true" />
              <button
                type="button"
                className={billing === 'individual' ? 'is-active' : ''}
                onClick={() => setBilling('individual')}
              >
                {t('pricing.individual')}
              </button>
              <button
                type="button"
                className={billing === 'packages' ? 'is-active' : ''}
                onClick={() => setBilling('packages')}
              >
                {t('pricing.packages')}
              </button>
            </div>
          </div>
        </div>

        <div className="pricing-type-selector">
          {singleLessons.plans.map((plan) => {
            const active = plan.id === selectedTypeId;
            const label = selectorLabels[plan.id];
            return (
              <button
                key={plan.id}
                type="button"
                className={`pricing-type-card${active ? ' is-active' : ''}`}
                style={{ '--card-color': COLOR_BY_PLAN_ID[plan.id] }}
                onClick={() => setSelectedTypeId(plan.id)}
              >
                {active && <span className="pricing-type-card__check">✓</span>}
                <span className="pricing-type-card__icon">{plan.icon}</span>
                <span className="pricing-type-card__name">{label}</span>
                <span className="pricing-type-card__price">{plan.price}</span>
              </button>
            );
          })}
        </div>

        {billing === 'packages' && (
          <p className="pricing-packages__subtitle">{packagesSection.subtitle}</p>
        )}

        {billing === 'individual' ? (
          <div className="pricing__grid">
            <div className="pricing__ticket">
              <BoardingPass
                price={selectedPlan.price}
                currency=""
                classesCount="1"
                minutes={MINUTES_BY_PLAN_ID[selectedPlan.id]}
                color={COLOR_BY_PLAN_ID[selectedPlan.id]}
                business={selectedPlan.id === 'ielts'}
              />
            </div>
          </div>
        ) : (
          <div className="pricing__grid">
            {selectedGroup.tiers.map((tier) => (
              <div className="pricing__ticket" key={tier.label}>
                <BoardingPass
                  price={tier.price}
                  currency=""
                  classesCount={extractClassesCount(tier.label)}
                  minutes={MINUTES_BY_PLAN_ID[selectedTypeId]}
                  color={COLOR_BY_PLAN_ID[selectedTypeId]}
                  business={Boolean(tier.bestValue)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Pricing;
