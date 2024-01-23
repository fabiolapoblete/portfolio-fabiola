import './style.scss'

export const Hero = () => {
    return (
        <section className='hero' id='hero'>
            <img
            className="hero__profile"
            src='../../public/profil-fabiola.jpeg'
            alt="Profile picture of Fabiola Poblete"
            />
        <section className='hero__heading'>
            <h1>Hello, i'm <span>Fabiola</span></h1>
            <h3>frontend developer</h3>
        </section>
        <a href="./documents/CV.pdf" target="_blank" className="btn btn--CV">Download my CV</a>
        </section>
    )
}