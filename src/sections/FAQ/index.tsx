import { CollapsibleBlock, SectionWrapper, Title } from '@/components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import s from './styles.module.css';
import clsx from 'clsx';
import ArrowDown from '@/assets/icons/arrowDown.svg?react';
import { links } from '@/utils/constants';
import { motion } from 'motion/react';

const FAQ: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionWrapper id={links.faq.value} className={s.wrapper}>
      <Title.SectionWrapper className={s.titleWrapper}>
        <Title.SubTitle title={t('faq')} />
        <Title.Sentence size="h2" className={s.title}>
          <Title.Gradient title={t('answers')} />{' '}
          <Title.Title title={t('on_common')} />{' '}
          <Title.Gradient title={t('questions')} />
        </Title.Sentence>
      </Title.SectionWrapper>
      <div className={s.answers}>
        {[
          {
            title: t('tiktok_earnings'),
            description: <div className={s.description}></div>,
          },
          {
            title: t('traffic_redirect_importance'),
            description: <div className={s.description}></div>,
          },
          {
            title: t('small_account_monetization'),
            description: <div className={s.description}></div>,
          },
          {
            title: t('gain_views'),
            description: <div className={s.description}></div>,
          },
          {
            title: t('earn_without_ads'),
            description: (
              <div className={s.description}>
                <p>{t('tiktok_not_only_ads')}</p>
                <p>{t('main_monetization_ways')}</p>
                <ul className={s.list}>
                  {[
                    'affiliate_programs',
                    'traffic_redirect',
                    'sell_services',
                    'donations_subscriptions',
                  ].map((i, idx) => (
                    <li className={s.item} key={idx}>
                      <p>{t(i)}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ),
          },
        ].map(({ title, description }, idx) => (
          <CollapsibleBlock
            key={idx}
            wrapperClassName={s.answer}
            buttonClassName={s.button}
            descriptionClassName={s.description}
            ButtonElement={(open) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: '30%' }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  delay: idx * 0.3,
                  ease: 'easeOut',
                }}
                viewport={{ once: true }}
              >
                <div className={clsx(s.element, open && s.open)}>
                  <span>{t(title)}</span>
                  <ArrowDown />
                </div>
              </motion.div>
            )}
            descriptionChildren={description}
            svgType="stroke"
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default FAQ;
