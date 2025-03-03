import { ButtonText, SectionWrapper } from '@/components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import s from './styles.module.css';
import Telegram from '@/assets/icons/telegram.svg?react';

const logo97x109 = '/logos/logo97x109.png';
const logo126x142 = '/logos/logo126x142.png';

const links = [
  { label: 'terms', href: '#' },
  { label: 'privacy', href: '#' },
  { label: 'cookies', href: '#' },
];

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const year = new Date().getFullYear();

  return (
    <SectionWrapper className={s.wrapper}>
      <div className={s.box}>
        <img alt="Logo" className={s.mobileLogo} src={logo97x109} />
        <img alt="Logo" className={s.desctopLogo} src={logo126x142} />
        <div className={s.links}>
          {links.map((link, idx) => (
            <ButtonText key={idx} href={link.href} className={s.link}>
              {t(link.label)}
            </ButtonText>
          ))}
        </div>
        <div className={s.copyright}>
          <span>{t('copyright')}</span>
          <span> © {year} | </span>
          <span>{t('all_rights_reserved')}</span>
        </div>
      </div>
      <a className={s.telegram} href="#">
        <Telegram />
      </a>
    </SectionWrapper>
  );
};

export default Footer;
