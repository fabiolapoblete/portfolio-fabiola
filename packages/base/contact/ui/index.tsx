import {
  EmailIcon,
  GithubIcon,
  LinkedInIcon,
} from "../../../core/assets/svgIcons";
import "./style.scss";

export const Contact = () => {
  return (
    <section className="contact">
      <p>
        I'm open to connecting, sharing ideas, or exploring potential
        opportunities. I welcome any inquiries, collaborations, or discussions.
        Feel free to reach out to me through the following channels:
      </p>
      <section className="contact__channels">
        <section>
          <a href="fabiola.broccolo@gmail.com" target="_blank">
            {EmailIcon}
          </a>
        </section>
        <section>
          <a href="linkedin.com/in/fabiola-poblete-662652114" target="_blank">
            {LinkedInIcon}
          </a>
        </section>
        <section>
          <a href="github.com/fabiolapoblete" target="_blank">
            {GithubIcon}
          </a>
        </section>
      </section>
      <p>
        Don't hesitate to drop me a message — I look forward to hearing from
        you!
      </p>
    </section>
  );
};
