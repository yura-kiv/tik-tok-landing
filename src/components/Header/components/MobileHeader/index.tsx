import React, { useEffect, useState } from 'react';
import s from './styles.module.css';
import MenuLeft from '@/assets/icons/menuLeft.svg?react';
import Close from '@/assets/icons/close.svg?react';
import { LanguageSwitch, ButtonText } from '@/components';
import { useTranslation } from 'react-i18next';
import { links } from '@/utils/constants';
import { handleSmoothScroll } from '@/utils/functions';
import { motion, AnimatePresence } from 'framer-motion';

const logo71x80 = '/logos/logo71x80.png';
const logo81x91 = '/logos/logo71x80.png';

const MobileHeader: React.FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <motion.div
      initial={{ opacity: 0, y: '-50%' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={s.wrapper}
    >
      <div className={s.container}>
        <div className={s.logo}>
          <a href="/">
            <img src={logo71x80} alt="Main logo" />
          </a>
        </div>
        <button className={s.button} onClick={() => setOpen(true)}>
          <MenuLeft />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className={s.dropdown}
            initial={{ opacity: 0, scale: 0.9, y: '-10%' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: '-10%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className={s.top}>
              <div className={s.logo}>
                <a href="/">
                  <img src={logo81x91} alt="Main logo" />
                </a>
              </div>
              <button className={s.button} onClick={() => setOpen(false)}>
                <Close />
              </button>
            </div>
            <div className={s.links}>
              {Object.values(links).map(({ href, label }) => (
                <ButtonText
                  key={href}
                  href={href}
                  className={s.link}
                  onClick={(e) => {
                    setOpen(false);
                    setTimeout(() => {
                      handleSmoothScroll(
                        e as React.MouseEvent<HTMLAnchorElement>
                      );
                    }, 500);
                  }}
                >
                  {t(label)}
                </ButtonText>
              ))}
            </div>
            <div className={s.bottom}>
              <LanguageSwitch />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default MobileHeader;
