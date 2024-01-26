import { motion } from 'framer-motion';
import { Header } from '@portfolio/header';
import { Contact } from '@portfolio/contact';

export const ContactPage = () => {
  return (
    <div className='wrapper'>
      <Header />
      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5 }}
        className='main'
      >
        <section className='section section--contact'>
          <h3 className='section__title'>Contact</h3>
          <Contact />
        </section>
      </motion.main>
    </div>
  );
};
