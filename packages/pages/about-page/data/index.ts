export const SoftSkills: string[] = [
  'willingness to learn',
  'goal oriented',
  'self directed',
  'leadership',
  'critical thinking',
  'problem solving',
  'decision making',
  'cooperation',
];

type SkillsDataProps = {
  title: string;
  skills: string;
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
