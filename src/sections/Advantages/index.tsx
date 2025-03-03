import { SectionWrapper, Title } from '@/components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import s from './styles.module.css';
import { cards } from './utils';
import clsx from 'clsx';
import { links } from '@/utils/constants';
import { motion } from 'motion/react';

const Advantages: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionWrapper id={links.advantages.value} className={s.wrapper}>
      <Title.SectionWrapper className={s.titleWrapper}>
        <Title.SubTitle title={t('collab_benefits')} className={s.subTitle} />
        <Title.Sentence size="h2" className={s.title}>
          <Title.Title title={t('my_key')} />{' '}
          <Title.Gradient title={t('advantages_in_sphere')} />{' '}
          <Title.Title title={t('tiktok_marketing')} />
        </Title.Sentence>
      </Title.SectionWrapper>
      <div className={s.cards}>
        {cards.map(({ title, description, icon: Icon }, idx) => (
          <motion.div
            key={title}
            initial={{
              opacity: 0,
              x: '-50%',
              y: '10px',
              rotate: `${5 * idx}deg`,
            }}
            whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
            transition={{
              duration: 1,
              delay: idx * 0.3,
              ease: 'easeOut',
            }}
            viewport={{ once: true }}
            className={clsx(s.card, idx % 2 !== 0 && s.painted)}
          >
            <Icon />
            <div className={s.text}>
              <p className={s.title}>{t(title)}</p>
              <p className={s.description}>{t(description)}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Advantages;
