import React from 'react';
import s from './styles.module.css';
import CheckCircle from '@/assets/icons/checkCircle.svg?react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

type PackageCardProps = {
  type: 'default' | 'filled';
  title: string;
  subTitle: string;
  optionsTitle: string;
  options: string[];
  className?: string;
};

const PackageCard: React.FC<PackageCardProps> = ({
  type = 'default',
  title,
  subTitle,
  options,
  optionsTitle,
  className,
}) => {
  const { t } = useTranslation();

  return (
    <div className={clsx(s.card, s[type], className)}>
      <div className={s.title}>
        <p>{t(title)}</p>
      </div>
      <div className={s.box}>
        <p className={s.optionsTitle}>{t(optionsTitle)}</p>
        <div className={s.options}>
          {options.map((option, idx) => (
            <div key={idx} className={s.option}>
              <CheckCircle className={s.check} />
              <p>{t(option)}</p>
            </div>
          ))}
        </div>
        <p className={s.subTitle}>{t(subTitle)}</p>
      </div>
    </div>
  );
};

export default PackageCard;
