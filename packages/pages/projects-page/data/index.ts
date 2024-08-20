type SkillsDataProps = {
  title: string;
  skills: string;
};

type ProjectDetailsProps = {
  title: string;
  imgSrc: string;
  desc: string;
  tags: string[];
  url: string;
  github: string;
};

export const SkillsData: SkillsDataProps[] = [
  { title: 'Programing languages', skills: 'JavaScript, Python, Java' },
  {
    title: 'Frontend techniques',
    skills: 'HTML, CSS, React, Redux, SASS, framer-motion, Anime.js',
  },
  { title: 'Backend and databases', skills: 'Node.js, Express.js, NeDb' },
  { title: 'Cloud services', skills: 'AWS, Firebase' },
  { title: 'Version control', skills: 'Git, GitHub, GitLab' },
  { title: 'UX design', skills: 'Figma' },
  { title: 'Agile methodology', skills: 'Scrum' },
];

export const ProjectDetails: ProjectDetailsProps[] = [
  {
    title: 'Examination Project',
    imgSrc: './examinationProject.png',
    desc: 'The project has focused on renewing and improving plugga-IT.se. By implementing a new code structure with a package-based architecture, carrying out an extensive refactoring and redesign, we have created a modern and enhanced user experience while prioritizing scalability by building a stable and well-structured codebase.',
    tags: [
      'JavaScript',
      'React',
      'TypeScript',
      'Firebase',
      'SASS',
      'Framer-motion',
      'Figma',
    ],
    url: 'https://seahorse-app-cp4id.ondigitalocean.app/',
    github: 'https://github.com/fabiolapoblete',
  },
  {
    title: 'Bamboo Bites',
    imgSrc: '/bambooBites.png',
    desc: 'A fullstack group examination project. We built a website for a restaurant that offers take away and a staff view for managing orders.',
    tags: [
      'JavaScript',
      'React',
      'AWS',
      'TypeScript',
      'Next.js',
      'SASS',
      'Framer-motion',
      'Figma',
    ],
    url: 'https://bamboo-bites-main.vercel.app/',
    github: 'https://github.com/fabiolapoblete/bamboo-bites',
  },
  {
    title: 'CloudCast',
    imgSrc: '/cloudCast.png',
    desc: 'Simple weather app using an API from Openweather and map from Leaflet. Used a package based architecture. ',
    tags: ['JavaScript', 'Leaflet'],
    url: 'https://unrivaled-moxie-8e819b.netlify.app',
    github: 'https://github.com/fabiolapoblete/cloud-cast',
  },

  // {
  //   title: 'Where It’s @ - ticket service',
  //   imgSrc: '/whereItsAt.png',
  //   desc: 'A group examination project in the React course. Different views and components using States, Routes, useEffect, useContext and API',
  //   tags: ['JavaScript', 'React', 'Framer-motion', 'SASS'],
  //   url: '',
  // },
  {
    title: 'WATCHlist',
    imgSrc: '/watchList.png',
    desc: 'Movie search app using an IMDB API.',
    tags: ['JavaScript', 'React', 'API'],
    url: 'https://melodic-jelly-ceb118.netlify.app',
    github:
      'https://github.com/fabiolapoblete/individual-examination-framework',
  },
  {
    title: 'Solaris',
    imgSrc: '/solaris.png',
    desc: 'Individual examination project in the JavaScript course.',
    tags: ['JavaScript'],
    url: 'https://kaleidoscopic-empanada-92990b.netlify.app',
    github: 'https://github.com/fabiolapoblete/solaris',
  },
];
