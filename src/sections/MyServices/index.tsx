import { CollapsibleBlock, SectionWrapper, Title } from '@/components';
import React from 'react';
import s from './styles.module.css';
import { services } from './utils';
import { useTranslation } from 'react-i18next';
import ArrowTopRight from '@/assets/icons/arrowTopRight.svg?react';
import clsx from 'clsx';
import { links } from '@/utils/constants';
import { motion } from 'motion/react';

const MyServices: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div id={links.services.value} className={s.wrapper}>
      <SectionWrapper className={s.container}>
        <Title.SectionWrapper className={s.titleWrapper}>
          <Title.SubTitle title={t('my_services')} />
          <Title.Sentence size="h2">
            <Title.Title title={t('comprehensive_solutions')} />{' '}
            <Title.Gradient title={t('your_success')} />{' '}
            <Title.Title title={t('in_tiktok')} />
          </Title.Sentence>
        </Title.SectionWrapper>
      </SectionWrapper>
      <div className={s.services}>
        {services.map(({ description, title }, idx) => {
          return (
            <CollapsibleBlock
              key={idx}
              wrapperClassName={s.service}
              buttonClassName={s.button}
              ButtonElement={({ open }) => {
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: '-50%', y: '10px' }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{
                      duration: 1,
                      delay: idx * 0.3,
                      ease: 'easeOut',
                    }}
                    viewport={{ once: true }}
                  >
                    <div className={clsx(s.element, open && s.open)}>
                      <span>{t(title)}</span>
                      <ArrowTopRight />
                    </div>
                  </motion.div>
                );
              }}
              descriptionChildren={
                <div className={s.description}>{t(description)}</div>
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyServices;
