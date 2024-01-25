import './style.scss';

import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className='hero' id='hero'>
      <motion.img
        className='hero__profile'
        src='/profil-fabiola.jpeg'
        alt='Profile picture of Fabiola Poblete'
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: 'linear' }}
      />
      <motion.section
        className='hero__heading'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 3, ease: 'linear' }}
      >
        <h1>
          Hello, i'm <span>Fabiola</span>
        </h1>
        <h3>frontend developer</h3>
      </motion.section>
    </section>
  );
};
