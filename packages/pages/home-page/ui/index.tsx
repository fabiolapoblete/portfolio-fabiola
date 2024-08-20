import { Header } from '@portfolio/header';
import { motion } from 'framer-motion';
// import { Hero } from '@portfolio/hero';
import './style.scss';

export const HomePage = () => {
  return (
    <div className='homeWrapper'>
      <Header />
      <section className='homeWrapper__profile'>
        <motion.img
          className='homeWrapper__profile__img'
          src='/profil-fabiola.jpeg'
          alt='Profile picture of Fabiola Brodl'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 3, ease: 'linear' }}
          // initial={{ x: -500, opacity: 0 }}
          // animate={{ x: 0, opacity: 1 }}
          // transition={{ duration: 2, ease: 'linear' }}
        />
        <motion.section
          className='homeWrapper__profile__desc'
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
      {/* <Hero /> */}
    </div>
  );
};
