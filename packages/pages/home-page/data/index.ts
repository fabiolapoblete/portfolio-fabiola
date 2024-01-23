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
    {title: 'Territorial Duck', imgSrc: '/assets/territorial_duck.png', desc: 'An ongoing game project in Unity in collaboration with my husband, sister-in-law and brother-in-law.', tags: ["Unity"], url: 'https://store.steampowered.com/app/2100130/Territorial_Duck/'},
    {title: 'Bamboo Bites', imgSrc: '../../../public/assets/bambooBites.png', desc: 'A fullstack group examination project. We built a website for a restaurant that offers take away and a staff view for managing orders.', tags: ['JavaScript', 'React', 'AWS', 'TypeScript', 'Next.js', 'SASS', 'Framer-motion'], url: 'https://bamboo-bites-main.vercel.app/'},
    {title: 'CloudCast', imgSrc: '../../../public/assets/cloudCast.png', desc: 'Simple weather app using an API from Openweather. Used Leaflet to implement a map.', tags: ['JavaScript', 'Leaflet'], url: 'https://unrivaled-moxie-8e819b.netlify.app'},
    {title: 'Where It’s @ - ticket service', imgSrc: '../../../public/assets/whereItsAt.png', desc: 'A group examination project in the React course. Different views and components using States, Routes, useEffect, useContext and API', tags: ['JavaScript', 'React', 'Framer-motion', 'SASS'], url: ''},
    {title: 'WATCHlist', imgSrc: '../../../public/assets/watchList.png', desc: 'Movie search app using an IMDb app.', tags: ['JavaScript', 'React', 'API'], url: 'https://melodic-jelly-ceb118.netlify.app'},
    {title: 'Solaris', imgSrc: '../../../public/assets/solaris.png', desc: 'Individual examination project in the JavaScript course.', tags: ['JavaScript'], url: 'https://kaleidoscopic-empanada-92990b.netlify.app'},
]