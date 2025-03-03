import { SectionWrapper, Title } from '@/components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import s from './styles.module.css';
import CheckCircle from '@/assets/icons/checkCircle.svg?react';
import { links } from '@/utils/constants';
import { motion } from 'motion/react';

const checks = ['views_tiktok', 'traffic_monetization', 'proven_strategies'];

const Introduce: React.FC = () => {
  const { t } = useTranslation();

  const year = new Date().getFullYear();

  return (
    <SectionWrapper id={links.about_me.value} className={s.wrapper}>
      <Title.SectionWrapper className={s.titleWrapper}>
        <Title.SubTitle title={t('lets_meet')} />
        <Title.Sentence size="h2" className={s.title}>
          <Title.Title title={t('your')} />{' '}
          <Title.Gradient title={t('personal_expert')} />{' '}
          <Title.Title title={t('tiktok_promotion')} />
        </Title.Sentence>
      </Title.SectionWrapper>
      <div className={s.container}>
        <div className={s.phrases}>
          <p className={s.phrase}>
            <span>{t('ex_blogger')}</span> {t('monetization_journey')}
          </p>
          <p className={s.phrase}>
            {t('helped_people')} <span>700+</span> {t('earn_traffic')}
          </p>
        </div>
        <div className={s.checks}>
          {checks.map((check, index) => (
            <motion.div
              key={check}
              initial={{ opacity: 0, x: '-50%', y: '10px' }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: 1,
                delay: index * 0.3,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
              className={s.check}
            >
              <CheckCircle className={s.icon} />
              <p>{t(check, index === 2 ? { year } : {})}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Introduce;
