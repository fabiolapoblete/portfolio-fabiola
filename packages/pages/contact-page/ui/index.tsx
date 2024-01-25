import "./style.scss";
import { Header } from "@portfolio/header";
import { Contact } from "@portfolio/contact";

export const ContactPage = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <section className="section section--contact">
          <h3 className="section__title">Contact</h3>
          <Contact />
        </section>
      </main>
    </div>
  );
};
