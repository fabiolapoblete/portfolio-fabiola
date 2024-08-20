import './style.scss';

import { motion } from 'framer-motion';
import { Header } from '@portfolio/header';
import { Tag } from '@portfolio/tag';
import { SkillsData, ProjectDetails } from '..';
import {
  BuildIcon,
  ChevronDown,
  GithubIcon,
  PlayIcon,
} from '../../../core/assets/svgIcons';
import { Title } from '@portfolio/title';

export const ProjectsPage = () => {
  return (
    <div className='projectsWrapper'>
      <Header />
      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5 }}
        className='main'
      >
        <section className='section projects__introduction'>
          <Title title='Projects' />
          <p>
            {' '}
            Here is a collection of projects I've engaged with that I'm extra
            proud of. Some are educational assignments, while others are pursued
            purely for enjoyment. Click on a card to go to the webpage. You can
            find additional projects on my{' '}
            <a
              className='projects__introduction__link'
              href='github.com/fabiolapoblete'
              target='_blank'
            >
              GitHub page.
            </a>
          </p>
          {ChevronDown}
        </section>
        <section className='section projects__container'>
          {ProjectDetails.map((project, index) => (
            <article className='projects__container__project' key={index}>
              <Title title={project.title} />
              <p>{project.desc}</p>
              <img
                className='projects__container__project--img'
                src={project.imgSrc}
                alt={project.title}
              />
              <section className='projects__container__project--icons'>
                <a href={project.url} target='_blank' className='projectCard'>
                  {PlayIcon}
                  <p>Run app</p>
                </a>
                <a href='github.com/fabiolapoblete' target='_blank'>
                  {GithubIcon}
                  View on Github.
                </a>
              </section>
              <section className='projects__container__project--tags'>
                {project.tags.map((tag, index) => (
                  <Tag key={index} tag={tag} />
                ))}
              </section>
            </article>

            // <a
            //   href={project.url}
            //   target='_blank'
            //   className='projectCard'
            //   key={index}
            // >
            //   <h4 className='projectCard__title'>{project.title}</h4>
            //   <p className='projectCard__desc'>{project.desc}</p>
            //   <img src={project.imgSrc} alt={project.title} />
            //   <section className='projectCard__tags'>
            //     {project.tags.map((tag, index) => (
            //       <Tag key={index} tag={tag} />
            //     ))}
            //   </section>
            // </a>
          ))}
        </section>
        {/* <section className='section section--skills' id='skills'>
          <h3 className='section__title'>Tech stack</h3>
          {SkillsData.map((section, index) => (
            <section key={index} className='skillsSection'>
              <section className='skillsColumn'>
                <div>{BuildIcon}</div>
                <p className='skillsSection__title'>{section.title}</p>
              </section>
              <section className='skillsColumn'>
                <p className='skillsSection__skills'>{section.skills}</p>
              </section>
            </section>
          ))}
        </section> */}
        {/* <section className='section--projects'>
          <section className='section--projects__header'>
            <h3 className='section__title'>
              Projects{' '}
              <span>
                <hr />
              </span>
            </h3>
          </section>
          <p className='section--projects__desc'>
            Here is a collection of projects I've engaged with that I’m extra
            proud of. Some are educational assignments, while others are pursued
            purely for enjoyment. Click on a card to go to the webpage. You can
            find additional projects on my{' '}
            <a href='github.com/fabiolapoblete' target='_blank'>
              GitHub page.
            </a>
          </p>
          <section className='section--projects__container'>
            {ProjectDetails.map((project, index) => (
              <a
                href={project.url}
                target='_blank'
                className='projectCard'
                key={index}
              >
                <h4 className='projectCard__title'>{project.title}</h4>
                <p className='projectCard__desc'>{project.desc}</p>
                <img src={project.imgSrc} alt={project.title} />
                <section className='projectCard__tags'>
                  {project.tags.map((tag, index) => (
                    <Tag key={index} tag={tag} />
                  ))}
                </section>
              </a>
            ))}
          </section>
        </section> */}
      </motion.main>
    </div>
  );
};
