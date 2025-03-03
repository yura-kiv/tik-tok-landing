import React, { useState } from 'react';
import s from './styles.module.css';
import clsx from 'clsx';

type CollapsibleBlockProps = {
  ButtonElement: React.FC<{ open: boolean }>;
  descriptionChildren: React.ReactNode;
  wrapperClassName?: string;
  buttonClassName?: string;
  descriptionClassName?: string;
  svgType?: 'fill' | 'stroke';
};

const CollapsibleBlock: React.FC<CollapsibleBlockProps> = ({
  ButtonElement,
  descriptionChildren,
  buttonClassName,
  descriptionClassName,
  wrapperClassName,
  svgType = 'fill',
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={clsx(s.wrapper, open && s.open, wrapperClassName)}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={clsx(s.button, s[svgType], buttonClassName)}
      >
        <ButtonElement open={open} />
      </button>
      <div className={s.container}>
        <div className={s.collapse}>
          <div className={clsx(s.description, descriptionClassName)}>
            {descriptionChildren}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollapsibleBlock;
