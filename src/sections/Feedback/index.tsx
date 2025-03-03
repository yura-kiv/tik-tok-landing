import { SectionWrapper, Title } from '@/components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import s from './styles.module.css';
import { links } from '@/utils/constants';
import { Scrollbar } from 'swiper/modules';

const imgs = [
  '/imgs/feedbackViktoria.jpeg',
  '/imgs/feedbackIlya.jpeg',
  '/imgs/feedbackOleksandr.jpeg',
  '/imgs/feedbackVolodimir.jpeg',
];

const Feedback: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionWrapper id={links.reviews.value} className={s.wrapper}>
      <Title.SectionWrapper>
        <Title.SubTitle title={t('client_reviews')} />
        <Title.Sentence size="h2">
          <Title.Gradient title={t('collab_experience')} />{' '}
          <Title.Title title={t('client_perspective')} />
        </Title.Sentence>
      </Title.SectionWrapper>
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
        {imgs.map((img, idx) => (
          <SwiperSlide key={idx} className={s.slide}>
            <div className={s.card}>
              <img alt={`Feedback #${idx + 1}`} src={img} className={s.img} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionWrapper>
  );
};

export default Feedback;
