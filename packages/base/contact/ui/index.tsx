import './style.scss';

import {
  CVIcon,
  GithubIcon,
  LinkedInIcon,
} from '../../../core/assets/svgIcons';

export const Contact = () => {
  return (
    <section className='contact'>
      <p>
        I'm open to connecting, sharing ideas, or exploring potential
        opportunities. I welcome any inquiries, collaborations, or discussions.
        Feel free to reach out to me through the following channels:
      </p>
      <section className='contact__channels'>
        <a
          href='https://www.linkedin.com/in/fabiola-poblete-662652114/'
          target='_blank'
        >
          {LinkedInIcon}
        </a>
        <a href='https://github.com/fabiolapoblete' target='_blank'>
          {GithubIcon}
        </a>
        <a
          href='/CV-FabiolaPoblete.pdf'
          target='_blank'
          rel='noopener noreferrer'
        >
          {CVIcon}
        </a>
      </section>
      <p>
        Don't hesitate to drop me a message — I look forward to hearing from
        you!
      </p>
    </section>
  );
};
