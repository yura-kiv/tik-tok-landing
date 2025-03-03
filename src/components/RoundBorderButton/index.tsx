import React from 'react';
import s from './styles.module.css';
import clsx from 'clsx';

type RoundBorderButtonProps = {
  className?: string;
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
};

const RoundBorderButton: React.FC<RoundBorderButtonProps> = ({
  className,
  children,
  href,
  onClick,
}) => {
  if (href)
    return (
      <a
        className={clsx(s.button, className)}
        onClick={onClick}
        href={href || '#'}
      >
        {children}
      </a>
    );

  return (
    <button className={clsx(s.button, className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default RoundBorderButton;
