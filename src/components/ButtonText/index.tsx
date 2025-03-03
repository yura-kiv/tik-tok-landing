import clsx from 'clsx';
import React from 'react';
import s from './styles.module.css';

type ButtonTextProps = {
  onClick?: (
    e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>
  ) => void;
  href?: string;
  className?: string;
  children?: React.ReactNode;
};

const ButtonText: React.FC<ButtonTextProps> = ({
  className,
  href,
  children,
  onClick,
}) => {
  if (href)
    return (
      <a
        href={href || '#'}
        className={clsx(s.button, className)}
        onClick={onClick}
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

export default ButtonText;
