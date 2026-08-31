import './TicketCard.css';

function TicketCard({
  variant = 'navy',
  featured = false,
  brand,
  eyebrow,
  icon,
  title,
  price,
  currency,
  description,
  tiers,
  bestValueLabel,
}) {
  return (
    <div className={`ticket ticket--${variant} ${featured ? 'ticket--featured' : ''}`}>
      <span className="ticket__punch" aria-hidden="true" />
      <div className="ticket__header">
        <span className="ticket__brand mono">{brand}</span>
        <span className="ticket__eyebrow mono">{eyebrow}</span>
      </div>
      <div className="ticket__body">
        {icon && <span className="ticket__icon">{icon}</span>}
        <h3 className="ticket__title">{title}</h3>
        {price && (
          <div className="ticket__price">
            {price}
            <span> {currency}</span>
          </div>
        )}
      </div>
      <div className="ticket__perforation" aria-hidden="true" />
      <div className="ticket__stub">
        {description && <p className="ticket__description mono">{description}</p>}
        {tiers && (
          <div className="ticket__tiers">
            {tiers.map((tier) => (
              <div className="ticket__tier" key={tier.label}>
                {tier.bestValue && (
                  <span className="ticket__tier-badge">{bestValueLabel}</span>
                )}
                <span className="ticket__tier-label mono">{tier.label}</span>
                <span className="ticket__tier-price">{tier.price}</span>
              </div>
            ))}
          </div>
        )}
        <span className="ticket__barcode" aria-hidden="true" />
      </div>
    </div>
  );
}

export default TicketCard;
