import { useTranslation } from 'react-i18next';
import { WHATSAPP_LINK, WECHAT_LINK, WECHAT_LINK_LOUIS } from '../../constants/contact';
import WhatsAppIcon from '../icons/WhatsAppIcon';
import WeChatIcon from '../icons/WeChatIcon';
import './Founders.css';

const CONTACT_ICONS = {
  whatsapp: WhatsAppIcon,
  wechat: WeChatIcon,
};

const CONTACT_LABEL_KEYS = {
  whatsapp: 'about.founders.contactWhatsapp',
  wechat: 'about.founders.contactWechat',
};

const FOUNDERS = [
  {
    id: 'teacher-f',
    photo: '/assets/teachers/teache_f.png',
    contacts: [
      { type: 'whatsapp', link: WHATSAPP_LINK },
      { type: 'wechat', link: WECHAT_LINK },
    ],
  },
  {
    id: 'louis',
    photo: '/assets/founders/louis.png',
    contacts: [{ type: 'wechat', link: WECHAT_LINK_LOUIS }],
  },
];

function Founders({ id }) {
  const { t } = useTranslation();
  const founders = t('about.founders.list', { returnObjects: true });

  return (
    <section className="section founders" id={id}>
      <div className="container">
        <div className="section-header section-header--center">
          <div className="eyebrow">{t('about.founders.eyebrow')}</div>
          <h2 className="section-title">{t('about.founders.title')}</h2>
        </div>

        <div className="founders__grid">
          {FOUNDERS.map((founder, index) => {
            const data = founders[index];
            return (
              <div className="founder-card" key={founder.id}>
                <div className="founder-card__photo">
                  <img src={founder.photo} alt={data.name} />
                </div>
                <div className="founder-card__body">
                  <h3 className="founder-card__name">{data.name}</h3>
                  <div className="founder-card__role mono">{data.role}</div>
                  <p className="founder-card__desc">{data.desc}</p>
                </div>

                {founder.contacts.length > 0 && (
                  <div className="founder-card__footer">
                    {founder.contacts.map((contact) => {
                      const Icon = CONTACT_ICONS[contact.type];
                      return (
                        <a
                          href={contact.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={t(CONTACT_LABEL_KEYS[contact.type])}
                          className={`founder-card__contact founder-card__contact--${contact.type}`}
                          key={contact.type}
                        >
                          <Icon />
                          {contact.type === 'whatsapp' ? 'WhatsApp' : 'WeChat'}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Founders;
