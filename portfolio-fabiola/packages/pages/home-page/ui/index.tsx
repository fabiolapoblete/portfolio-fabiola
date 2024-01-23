import './style.scss';
import { Header } from '@portfolio/header'
import { Hero } from '@portfolio/hero'
import { SkillsData, ProjectDetails } from '..'
import { BuildIcon } from '../../../core/assets/svgIcons';

export const MainPage = () => {    
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
                    {SkillsData.map((section, index) => (
                        <section key={index} className='skillsSection'>
                            <section className='skillsColumn'>
                                <div>{BuildIcon}</div>
                                <p>{section.title}</p>
                            </section>
                            <section className='skillsColumn'>
                                <p>{section.skills}</p>
                            </section>
                        </section>
                    ))}
                </section>
                <section className='section section--projects' id="projects">
                    <h3 className='section__title'>Projects</h3>
                    <section className='section--projects__container'>
                        {
                            ProjectDetails.map((project, index) => (
                                <article key={index}>
                                    <img src={project.imgSrc} alt="" />
                                    <h4>{project.title}</h4>
                                    <p>{project.desc}</p>
                                    <section>
                                        {
                                            project.tags.map((tag, index) => (
                                                <p key={index}>{tag}</p>
                                            ))
                                        }
                                    </section>
                                </article>
                            ))
                        }
                    </section>
                </section>
            </main>
        </div>
    )
}