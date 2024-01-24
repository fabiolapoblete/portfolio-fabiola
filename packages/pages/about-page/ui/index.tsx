import './style.scss';
import { Header } from '@portfolio/header'
// import { Tag } from '@portfolio/tag'
// import { Contact } from '@portfolio/contact'
import { SoftSkills } from '..'
// import { BuildIcon } from '../../../core/assets/svgIcons';

export const AboutPage = () => {
    return (
        <div className='wrapper'>
            <Header />
            <main className='main'>
                <section className='section section--about'>
                    <h3 className='section__title'>About me</h3>
                    <section className='section__content'>
                        <section>
                        <p>Two years ago i made a career switch to pursue my dream of becoming a developer, and I haven't looked back since. I have a background in meteorology with a bachelor's degree in physics and dedicated eight years at SMHI where I explored diverse roles and fields.</p>
                        <p>I've gained professional experience in meteorology, development and leadership from guiding captains worldwide to delivering weather forecasts on national radio and issuing critical weather warnings. In the midst of these experiences, I found a real interest in technology and development.</p>
                        <p>Throughout my studies, I've worn the hats of both project manager and junior developer at SMHI, finding great joy in these roles. The challenges of coding and problem-solving is energizing, and I've continuously sought opportunities to expand my technical expertise.</p>
                        
                        <p>I'm a person with a lot of energy, who finds great joy in solving problems and I'm driven by seeing progress and development.</p>
                        
                        <p>During my free time, you'll often find me soaking up the best moments with my family, whether it's sharing laughs or diving into friendly competition with boardgames and online gaming. I also love escaping into nature — be it a stroll in the park or a hike in the woods.</p>
                        </section>
                        <section className='section__content--right'>
                            <img
                            className="hero__profile"
                            src='/profil-fabiola.jpeg'
                            alt="Profile picture of Fabiola Poblete"
                            />
                            <section className='section__content--right__skills'>
                                <ul>
                                    {SoftSkills.map((skill) => (
                                        <li><span>{skill}</span></li>
                                    ))}
                                </ul>
                            </section>
                        </section>
                    </section>
                    {/* <h3 className='section__title'>Soft skills</h3>
                    <section>
                        <p>willingness to learn <span>-</span> goal-oriented <span>-</span> self-directed <span>-</span> leadership <span>-</span> critical thinking <span>-</span> problem solving <span>-</span> decision making <span>-</span> cooperation</p>
                    </section> */}
                </section>
                {/* <section className='section section--skills' id="skills">
                    <h3 className='section__title'>Technical skills</h3>
                    {SkillsData.map((section, index) => (
                        <section key={index} className='skillsSection'>
                            <section className='skillsColumn'>
                                <div>{BuildIcon}</div>
                                <p className='skillsSection__title'>{section.title}</p>
                            </section>
                            <section className='skillsColumn'>
                                <p>{section.skills}</p>
                            </section>
                        </section>
                    ))}
                </section>
                <section className='section section--projects' id="projects">
                    <h3 className='section__title'>Projects</h3>
                    <p>Here is a collection of projects I've engaged with that I’m extra proud of. Some are educational assignments, while others are pursued purely for enjoyment. Click on a card to go to the webpage. You can find additional projects on my <a href='github.com/fabiolapoblete' target='_blank'>GitHub page.</a></p>
                    <section className='section--projects__container'>
                        {
                            ProjectDetails.map((project, index) => (
                                <a href={project.url} target='_blank' className='projectCard' key={index}>
                                    <img className='projectCard__img' src={project.imgSrc} alt="" />
                                    <h4 className='projectCard__title'>{project.title}</h4>
                                    <p className='projectCard__desc'>{project.desc}</p>
                                    <section className='projectCard__tags'>
                                        {
                                            project.tags.map((tag, index) => (
                                                <Tag key={index} tag={tag}/>
                                            ))
                                        }
                                    </section>
                                </a>
                            ))
                        }
                    </section>
                </section>
                <section className='section section--contact'>
                    <h3 className='section__title'>Contact</h3>
                    <Contact />
                </section> */}
            </main>
        </div>
    )
}