import "./style.scss";
import { Header } from "@portfolio/header";
import { SoftSkills } from "..";

export const AboutPage = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <section className="section section--about">
          <h3 className="section__title">About me</h3>
          <section className="section__content">
            <section>
              <p>
                Two years ago i made a career switch to pursue my dream of
                becoming a developer, and I haven't looked back since. I have a
                background in meteorology with a bachelor's degree in physics
                and dedicated eight years at SMHI where I explored diverse roles
                and fields.
              </p>
              <p>
                I've gained professional experience in meteorology, development
                and leadership from guiding captains worldwide to delivering
                weather forecasts on national radio and issuing critical weather
                warnings. In the midst of these experiences, I found a real
                interest in technology and development.
              </p>
              <p>
                Throughout my studies, I've worn the hats of both project
                manager and junior developer at SMHI, finding great joy in these
                roles. The challenges of coding and problem-solving is
                energizing, and I've continuously sought opportunities to expand
                my technical expertise.
              </p>

              <p>
                I'm a person with a lot of energy, who finds great joy in
                solving problems and I'm driven by seeing progress and
                development.
              </p>

              <p>
                During my free time, you'll often find me soaking up the best
                moments with my family, whether it's sharing laughs or diving
                into friendly competition with boardgames and online gaming. I
                also love escaping into nature — be it a stroll in the park or a
                hike in the woods.
              </p>
            </section>
            <section className="section__content--right">
              <img
                className="hero__profile"
                src="/profil-fabiola.jpeg"
                alt="Profile picture of Fabiola Poblete"
              />
              <section className="section__content--right__skills">
                <ul>
                  {SoftSkills.map((skill) => (
                    <li>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </section>
          </section>
        </section>
      </main>
    </div>
  );
};