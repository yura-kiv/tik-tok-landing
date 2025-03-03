import React from 'react';
import s from './styles.module.css';
import clsx from 'clsx';

export type GradientTextProps = {
  className?: string;
  text?: string;
};

const GradientText: React.FC<GradientTextProps> = ({ className, text }) => {
  return <span className={clsx(s.text, className)}>{text}</span>;
};

export default GradientText;
