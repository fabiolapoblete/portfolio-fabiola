export const SkillsData: {title: string, skills: string}[]  = [
    { title: 'Programing languages', skills: 'JavaScript, Python' },
    { title: 'Frontend techniques', skills: 'HTML, CSS, React, Redux, SASS, framer-motion, Anime.js' },
    { title: 'Backend techniques', skills: 'Node.js, Express.js, NeDb' },
    { title: 'Cloud services', skills: 'AWS (Amazon Web Services)' },
    { title: 'Version control', skills: 'GitHub, GitLab' },
    { title: 'UX design', skills: 'Figma' },
    { title: 'Agile methodology', skills: 'Scrum' },
];

type ProjectDetailsProps = {
    title: string
    imgSrc: string
    desc: string
    tags: string[]
    url: string
}

export const ProjectDetails: ProjectDetailsProps[] = [
    {title: 'Territorial Duck', imgSrc: '', desc: 'An ongoing game project in Unity in collaboration with my husband, sister-in-law and brother-in-law.', tags: ["Unity"], url: ''},
    {title: 'Bamboo Bites', imgSrc: '', desc: 'A fullstack group examination project. We built a website for a restaurant that offers take away and a staff view for managing orders.', tags: ['JavaScript', 'React', 'AWS', 'TypeScript', 'Next.js', 'SASS', 'Framer-motion'], url: ''},
    {title: 'CloudCast', imgSrc: '', desc: 'Simple weather app using an API from Openweather. Used Leaflet to implement a map.', tags: ['JavaScript', 'Leaflet'], url: ''},
    {title: 'Where It’s @ - ticket service', imgSrc: '', desc: 'A group examination project in the React course. Different views and components using States, Routes, useEffect, useContext and API', tags: ['JavaScript', 'React', 'Framer-motion', 'SASS'], url: ''},
    {title: 'WATCHlist', imgSrc: '', desc: 'Movie search app using an IMDb app.', tags: ['JavaScript', 'React', 'API'], url: ''},
    {title: 'Solaris', imgSrc: '', desc: 'Individual examination project in the JavaScript course.', tags: ['JavaScript'], url: ''},
]