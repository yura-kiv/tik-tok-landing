import { GradientText, SectionWrapper } from '@/components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import s from './styles.module.css';
import { motion } from 'motion/react';

const tikTokLogoSrc = '/imgs/tikTokLogo.png';

const TikTokIs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionWrapper className={s.wrapper}>
        <span className={s.space} />
        <GradientText text={t('tiktok_tool')} className={s.text} />
        <div className={s.tikTokRight}>
          <img src={tikTokLogoSrc} alt="TikTok logo" />
        </div>
        <div className={s.tikTokLeft}>
          <img src={tikTokLogoSrc} alt="TikTok logo" />
        </div>
      </SectionWrapper>
    </motion.div>
  );
};

export default TikTokIs;
