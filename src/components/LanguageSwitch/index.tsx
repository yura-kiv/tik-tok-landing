import React from 'react';
import s from './styles.module.css';
import clsx from 'clsx';
import { supportedLngs } from '@/i18n';
import ButtonText from '../ButtonText';
import { useTranslation } from 'react-i18next';

type LanguageSwitchProps = {
  className?: string;
};

const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ className }) => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={clsx(s.wrapper, className)}>
      {Object.entries(supportedLngs).map(([key, label]) => (
        <ButtonText
          key={key}
          className={clsx(s.button, { [s.active]: i18n.language === key })}
          onClick={() => handleChangeLanguage(key)}
        >
          {label}
        </ButtonText>
      ))}
    </div>
  );
};

export default LanguageSwitch;
