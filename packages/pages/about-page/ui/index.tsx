import './style.scss';

import { motion } from 'framer-motion';
import { Header } from '@portfolio/header';
import { SoftSkills } from '..';
import { CVIcon } from '../../../core/assets/svgIcons';

export const AboutPage = () => {
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
        <section className='section section--about'>
          <h3 className='section__title'>About me</h3>
          <section className='section__content'>
            <section>
              <p>
                Enthusiastic and driven developer that finds great joy in
                solving problems and is driven by seeing progress and
                development. Methodical, thorough, attentive and curious with
                good communication skills. Capable multitasker, having balanced
                full-time studies with roles as a project manager and a frontend
                developer.
              </p>
              {/* <p>
                I've gained professional experience in meteorology, development
                and leadership from guiding captains worldwide to delivering
                weather forecasts on national radio and issuing critical weather
                warnings. In the midst of these experiences, I found a real
                interest in technology and development.
              </p>
              <p>
                Throughout my studies, I've worn the hats of both project
                manager and junior developer at SMHI, finding great joy in these
                roles. The challenges of coding and problem-solving is
                energizing, and I've continuously sought opportunities to expand
                my technical expertise.
              </p>

              <p>
                I'm a person with a lot of energy, who finds great joy in
                solving problems and I'm driven by seeing progress and
                development.
              </p> */}

              <p>
                During my free time, you'll often find me soaking up the best
                moments with my family, whether it's sharing laughs or diving
                into friendly competition with boardgames and online gaming. I
                also love escaping into nature — be it a stroll in the park or a
                hike in the woods.
              </p>
              <section className='section__content--cv'>
                <motion.a
                  href='/CV_FabiolaBrodl.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ scale: 1.1, y: -10 }}
                >
                  {CVIcon}
                </motion.a>
                <p>Checkout my CV! </p>
              </section>
            </section>
            <section className='section__content--right'>
              <img
                className='hero__profile'
                src='/profil-fabiola.jpeg'
                alt='Profile picture of Fabiola Poblete'
              />
              <section className='section__content--right__skills'>
                <ul>
                  {SoftSkills.map((skill, index) => (
                    <li key={index}>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </section>
          </section>
        </section>
      </motion.main>
    </div>
  );
};
