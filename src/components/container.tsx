import { FC, ReactNode } from 'react';
import clsx from 'clsx';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container: FC<ContainerProps> = props => {
  return (
    <div
      className={clsx(
        'xl:max-w-[1140px] lg:max-w-[1000px] md:max-w-[740px] sm:max-w-[620px] mx-auto',
        props.className,
      )}
    >
      {props.children}
    </div>
  );
};
