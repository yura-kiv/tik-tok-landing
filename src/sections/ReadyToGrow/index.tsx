import { RoundBorderButton, SectionWrapper, Title } from '@/components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import s from './styles.module.css';

const ReadyToGrow: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionWrapper className={s.wrapper}>
      <div className={s.container}>
        <Title.SectionWrapper className={s.titleWrapper}>
          <Title.SubTitle title={t('ready_to_grow')} />
          <Title.Sentence size="h2" className={s.title}>
            <Title.Title title={t('get')} />{' '}
            <Title.Gradient title={t('personal_consultation')} />{' '}
            <Title.Title title={t('build_way_to_success')} />
          </Title.Sentence>
        </Title.SectionWrapper>{' '}
        <p className={s.description}>{t('join_to_team')}</p>
      </div>
      <RoundBorderButton className={s.button} href={'#'}>
        {t('book_consultation')}
      </RoundBorderButton>
    </SectionWrapper>
  );
};

export default ReadyToGrow;
