import { Header } from "@portfolio/header";
import { Tag } from "@portfolio/tag";
import { SkillsData, ProjectDetails } from "@portfolio/home-page";
import { BuildIcon } from "../../../core/assets/svgIcons";
import "./style.scss";

export const ProjectsPage = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <section className="section section--skills" id="skills">
          <h3 className="section__title">Technical skills</h3>
          {SkillsData.map((section, index) => (
            <section key={index} className="skillsSection">
              <section className="skillsColumn">
                <div>{BuildIcon}</div>
                <p className="skillsSection__title">{section.title}</p>
              </section>
              <section className="skillsColumn">
                <p className="skillsSection__skills">{section.skills}</p>
              </section>
            </section>
          ))}
        </section>
        <section className="section--projects">
          <section className="section--projects__header">
            <h3 className="section__title">
              Projects{" "}
              <span>
                <hr />
              </span>
            </h3>
          </section>
          <p className="section--projects__desc">
            Here is a collection of projects I've engaged with that I’m extra
            proud of. Some are educational assignments, while others are pursued
            purely for enjoyment. Click on a card to go to the webpage. You can
            find additional projects on my{" "}
            <a href="github.com/fabiolapoblete" target="_blank">
              GitHub page.
            </a>
          </p>
          <section className="section--projects__container">
            {ProjectDetails.map((project, index) => (
              <a
                href={project.url}
                target="_blank"
                className="projectCard"
                key={index}
              >
                <h4 className="projectCard__title">{project.title}</h4>
                <p className="projectCard__desc">{project.desc}</p>
                <section className="projectCard__tags">
                  {project.tags.map((tag, index) => (
                    <Tag key={index} tag={tag} />
                  ))}
                </section>
              </a>
            ))}
          </section>
        </section>
      </main>
    </div>
  );
};
