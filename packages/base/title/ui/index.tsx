import './style.scss';

export const Title = ({ title }: { title: string }) => {
  return (
    <section className='titleSection'>
      <h3 className='titleSection__title'>{title} </h3>
      <hr className='titleSection__line' />
    </section>
  );
};
