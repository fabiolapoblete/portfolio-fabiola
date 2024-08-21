import './style.scss';

import { motion } from 'framer-motion';
import { CVIcon, GithubIcon, LinkedInIcon } from '@portfolio/assets';

export const Contact = () => {
  return (
    <section className='contact'>
      <p>
        I'm open to connecting, sharing ideas, or exploring potential
        opportunities. I welcome any inquiries, collaborations, or discussions.
        Feel free to reach out to me through the following channels:
      </p>
      <section className='contact__channels'>
        <motion.a
          href='https://www.linkedin.com/in/fabiola-poblete-662652114/'
          target='_blank'
          whileHover={{ scale: 1.1, y: -10 }}
        >
          {LinkedInIcon}
        </motion.a>
        <motion.a
          href='https://github.com/fabiolapoblete'
          target='_blank'
          whileHover={{ scale: 1.1, y: -10 }}
        >
          {GithubIcon}
        </motion.a>
        <motion.a
          href='/CV-FabiolaPoblete.pdf'
          target='_blank'
          rel='noopener noreferrer'
          whileHover={{ scale: 1.1, y: -10 }}
        >
          {CVIcon}
        </motion.a>
      </section>
      <p>
        Don't hesitate to drop me a message — I look forward to hearing from
        you!
      </p>
    </section>
  );
};
