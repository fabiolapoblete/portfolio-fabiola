import './style.scss';
import { Header } from '@portfolio/header'
import { Hero } from '@portfolio/hero'

export const MainPage = () => {
    const skillsData = [
        { title: 'Programing languages', skills: 'JavaScript, Python' },
        { title: 'Frontend techniques', skills: 'HTML, CSS, React, Redux, SASS, framer-motion, Anime.js' },
        { title: 'Backend techniques', skills: 'Node.js, Express.js, NeDb' },
        { title: 'Cloud services', skills: 'AWS (Amazon Web Services)' },
        { title: 'Version control', skills: 'GitHub, GitLab' },
        { title: 'UX design', skills: 'Figma' },
        { title: 'Agile methodology', skills: 'Scrum' },
    ];
    return (
        <div className='wrapper'>
            <Header />
            <Hero />
            <main className='main'>
                <section className='section section--about' id="about">
                    <h3 className='section__title'>About me</h3>
                    <p>Two years ago i made a career switch to pursue my dream of becoming a developer, and I haven't looked back since. I have a background in meteorology with a bachelor's degree in physics and dedicated eight years at SMHI where I explored diverse roles and fields.</p>
                    <p>My career has involved diverse roles, from guiding captains worldwide to delivering weather forecasts on national radio and issuing critical weather warnings. In the midst of these experiences, I found a real interest in technology and development.</p>
                    <p>Throughout my studies, I've worn the hats of both project manager and junior developer, finding great joy in these roles. The challenges of coding and problem-solving is energizing, and I've continuously sought opportunities to expand my technical expertise.</p>
                </section>
                <section className='section section--skills' id="skills">
                    <h3 className='section__title'>Technical skills</h3>
                    {skillsData.map((section, index) => (
                        <section key={index} className='skillsSection'>
                            <section className='skillsColumn'>
                                <p>{section.title}</p>
                            </section>
                            <section className='skillsColumn'>
                                <p>{section.skills}</p>
                            </section>
                        </section>
                    ))}
                </section>
            </main>
        </div>
    )
}