import { PackageCard, SectionWrapper, Title } from '@/components';
import React from 'react';
import { Scrollbar } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { cards } from './utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import s from './styles.module.css';
import useIsMobile from '@/hooks/useIsMobile';
import { links } from '@/utils/constants';

const Packages: React.FC = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile(1280);

  return (
    <SectionWrapper id={links.pricing.value} className={s.wrapper}>
      <Title.SectionWrapper>
        <Title.SubTitle title={t('consultation_packages')} />
        <Title.Sentence size="h2">
          <Title.Title title={t('choose_option')} />{' '}
          <Title.Gradient title={t('optimal_variant')} />{' '}
          <Title.Title title={t('for_you')} />
        </Title.Sentence>
      </Title.SectionWrapper>

      {isMobile ? (
        <Swiper
          className={s.swiper}
          slidesPerView="auto"
          spaceBetween={24}
          modules={[Scrollbar]}
          scrollbar={{
            hide: false,
            draggable: true,
            dragSize: 'auto',
          }}
        >
          {cards.map((card, idx) => (
            <SwiperSlide key={idx} className={s.slide}>
              <PackageCard
                key={card.title}
                type={idx === 2 ? 'filled' : 'default'}
                className={s.card}
                {...card}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className={s.cards}>
          {cards.map((card, idx) => (
            <PackageCard
              key={card.title}
              type={idx === 2 ? 'filled' : 'default'}
              className={s.card}
              {...card}
            />
          ))}
        </div>
      )}
    </SectionWrapper>
  );
};

export default Packages;
