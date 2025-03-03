import clsx from 'clsx';
import React from 'react';
import s from './styles.module.css';

type SectionWrapperProps = {
  className?: string;
  children?: React.ReactNode;
  id?: string;
};

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className,
  id,
}) => {
  return (
    <div id={id} className={clsx(s.wrapper, className)}>
      {children}
    </div>
  );
};

export default SectionWrapper;
