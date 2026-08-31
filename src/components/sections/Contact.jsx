import QRCode from 'react-qr-code';
import { useTranslation } from 'react-i18next';
import { WHATSAPP_LINK, WECHAT_LINK, CONTACT_EMAIL } from '../../constants/contact';
import WhatsAppIcon from '../icons/WhatsAppIcon';
import WeChatIcon from '../icons/WeChatIcon';
import MailIcon from '../icons/MailIcon';
import './Contact.css';

const PRIMARY_METHODS = {
  wechat: { key: 'wechat', href: WECHAT_LINK, external: true, icon: WeChatIcon, variant: 'wechat', channelName: 'WeChat' },
  whatsapp: { key: 'whatsapp', href: WHATSAPP_LINK, external: true, icon: WhatsAppIcon, variant: 'whatsapp', channelName: 'WhatsApp' },
};

const EMAIL_METHOD = { key: 'email', href: `mailto:${CONTACT_EMAIL}`, external: false, icon: MailIcon, variant: 'email' };

function Contact({ id }) {
  const { t, i18n } = useTranslation();
  const primaryMethod = i18n.language === 'zh' ? PRIMARY_METHODS.wechat : PRIMARY_METHODS.whatsapp;
  const buttons = [primaryMethod, EMAIL_METHOD];
  const step1 = t('contact.global.step1', { channel: primaryMethod.channelName });
  const restSteps = t('contact.global.steps', { returnObjects: true });
  const steps = [step1, ...restSteps];

  return (
    <section className="section section--stripes contact" id={id}>
      <div className="container">
        <div className="section-header section-header--center">
          <div className="eyebrow">{t('contact.eyebrow')}</div>
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="contact__lead">{t('contact.lead')}</p>
        </div>

        <div className="contact__layout">
          <div className="contact__panel">
            <span className="contact__tape contact__tape--left" aria-hidden="true" />
            <span className="contact__tape contact__tape--right" aria-hidden="true" />
            <h3 className="contact__panel-title">{t('contact.global.title')}</h3>
            <ol className="contact__steps">
              {steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="contact__notes">
            {buttons.map(({ key, href, external, icon: Icon, variant }) => (
              <div key={key} className={`contact__note contact__note--${variant}`}>
                <div className="contact__note-qr">
                  <QRCode value={href} size={88} />
                </div>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={`contact__button contact__button--${variant}`}
                >
                  <Icon />
                  {t(`contact.global.${key}`)}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
