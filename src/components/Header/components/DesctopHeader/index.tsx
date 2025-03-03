import React from 'react';
import s from './styles.module.css';
import { ButtonText, LanguageSwitch } from '@/components';
import { links } from '@/utils/constants';
import { useTranslation } from 'react-i18next';
import { handleSmoothScroll } from '@/utils/functions';
import { motion } from 'framer-motion';

const logo81x91 = '/logos/logo81x91.png';

const DesctopHeader: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: '-50%' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={s.wrapper}
    >
      <div className={s.logo}>
        <a href="/">
          <img alt="Logo" src={logo81x91} />
        </a>
      </div>
      <div className={s.links}>
        {Object.values(links).map((link, idx) => (
          <ButtonText
            href={link.href}
            key={idx}
            onClick={(e) => {
              handleSmoothScroll(e as React.MouseEvent<HTMLAnchorElement>);
            }}
          >
            {t(link.label)}
          </ButtonText>
        ))}
      </div>
      <LanguageSwitch />
    </motion.div>
  );
};

export default DesctopHeader;
