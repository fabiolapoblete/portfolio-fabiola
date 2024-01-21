import './style.scss';
import { Navbar } from '@portfolio/navbar'
import { PageHeader } from '@portfolio/page-header'

export const HomePage = () => {
    return (
        <div className="home-page">
            <Navbar />
            <main>
                <figure className='home-page__img'>
                    <img src='../../public/assets/profil-fabiola.jpeg' alt="" />
                </figure>
                <section className='home-page__heading'>
                    <h1>Hello, i'm <span>Fabiola</span></h1>
                    <h3>junior frontend developer</h3>
                </section>
            </main>
            <section className='about'>
                <PageHeader title="About me" />
                <section>
                    <p>Two years ago i made a career switch to pursue my dream of becoming a developer, and I haven't looked back since. I have a background in meteorology with a bachelor's degree in physics and dedicated eight years at SMHI where I explored diverse roles and fields.</p>
                    <p>My career has involved diverse roles, from guiding captains worldwide to delivering weather forecasts on national radio and issuing critical weather warnings. In the midst of these experiences, I found a real interest in technology and development.</p>
                    <p>Throughout my studies, I've worn the hats of both project manager and junior developer, finding great joy in these roles. The challenges of coding and problem-solving is energizing, and I've continuously sought opportunities to expand my technical expertise.</p>
                </section>
            </section>

        </div>

    )
}