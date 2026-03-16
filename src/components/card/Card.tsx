import { ComponentProps } from 'react';
import clsx from 'clsx';
import s from './Card.module.scss';

export const Card = ({
  children,
  className,
  ...props
}: ComponentProps<'div'>) => {
  return (
    <div className={clsx(s.card, className)} {...props}>
      {children}
    </div>
  );
};
