import { Header } from '@portfolio/header'
import { Tag } from '@portfolio/tag'
import { SkillsData, ProjectDetails } from '@portfolio/home-page'
import { BuildIcon } from '../../../core/assets/svgIcons'
import './style.scss'

export const ProjectsPage = () => {
    return (

        <div className="wrapper">
            <Header />
            <main className="main">
                <section className='section section--skills' id="skills">
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
                <section className='section--projects'>
                    <section className='section--projects__header'>
                        <h3 className='section__title'>Projects <span><hr/></span></h3>
                    </section>
                    <p className='section--projects__desc'>Here is a collection of projects I've engaged with that I’m extra proud of. Some are educational assignments, while others are pursued purely for enjoyment. Click on a card to go to the webpage. You can find additional projects on my <a href='github.com/fabiolapoblete' target='_blank'>GitHub page.</a></p>
                    <section className='section--projects__container'>
                        {
                            ProjectDetails.map((project, index) => (
                                <a href={project.url} target='_blank' className='projectCard' key={index}>
                                    {/* <img className='projectCard__img' src={project.imgSrc} alt="" /> */}
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
            </main>
        </div>
    )
}



// import { Header } from '@portfolio/header'
// import { Tag } from '@portfolio/tag'
// import { SkillsData, ProjectDetails } from '@portfolio/home-page'
// import { BuildIcon } from '../../../core/assets/svgIcons'
// import './style.scss'
// // import {Slider} from 'react-slick';
// import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// export const ProjectsPage = () => {
//     const settings = {
//         // dots: true,
//         // infinite: true,
//         speed: 500,
//         slidesToShow: 2, // Adjust the number of visible slides
//         slidesToScroll: 1,
//       };
//     return (

//         <div className="wrapper">
//             <Header />
//             <main className="main">
//                 <section className='section section--skills' id="skills">
//                     <h3 className='section__title'>Technical skills</h3>
//                     {SkillsData.map((section, index) => (
//                         <section key={index} className='skillsSection'>
//                             <section className='skillsColumn'>
//                                 <div>{BuildIcon}</div>
//                                 <p className='skillsSection__title'>{section.title}</p>
//                             </section>
//                             <section className='skillsColumn'>
//                                 <p>{section.skills}</p>
//                             </section>
//                         </section>
//                     ))}
//                 </section>
//                 <section className="section--projects">
//                     <section className="section--projects__header">
//                         <h3 className="section__title">
//                         Projects <span><hr /></span>
//                         </h3>
//                     </section>
//                     {/* Use the Slider component from react-slick */}
//                     <Slider {...settings}>
//                         {ProjectDetails.map((project, index) => (
//                         <div key={index} className="projectCard">
//                             <a href={project.url} target="_blank">
//                             {/* <img className='projectCard__img' src={project.imgSrc} alt="" /> */}
//                             <h4 className="projectCard__title">{project.title}</h4>
//                             <p className="projectCard__desc">{project.desc}</p>
//                             <section className="projectCard__tags">
//                                 {project.tags.map((tag, index) => (
//                                 <Tag key={index} tag={tag} />
//                                 ))}
//                             </section>
//                             </a>
//                         </div>
//                         ))}
//                     </Slider>
//                 </section>
//             </main>
//         </div>
//     )
// }





