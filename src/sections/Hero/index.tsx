import { SectionWrapper, Header, Title, RoundBorderButton } from '@/components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import s from './styles.module.css';
import { motion } from 'motion/react';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionWrapper className={s.wrapper}>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className={s.container}
      >
        <Title.SectionWrapper type="main" className={s.titleWrapper}>
          <Title.Sentence size="h1" className={s.title}>
            <>
              <Title.Title title={t('unlock_potential')} />{' '}
              <Title.Gradient title="TikTok" />
            </>
          </Title.Sentence>
          <Title.SubTitle
            title={t('growth_strategies')}
            color="primary"
            className={s.subTitle}
          />
        </Title.SectionWrapper>
        <RoundBorderButton href={'#'}>
          {t('book_consultation')}
        </RoundBorderButton>
      </motion.div>
      <div className={s.imgMobile} />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className={s.imgDesctop}
      />
    </SectionWrapper>
  );
};

export default Hero;
