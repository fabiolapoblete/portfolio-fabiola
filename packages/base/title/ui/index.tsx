import { ReactElement } from 'react';
import './style.scss';

type TitleProps = {
  title: string;
  icon?: ReactElement;
};

export const Title: React.FC<TitleProps> = ({ title, icon }) => {
  return (
    <section className='titleSection'>
      <h3 className='titleSection__title'>
        {icon} {title}
      </h3>
      <hr className='titleSection__line' />
    </section>
  );
};
