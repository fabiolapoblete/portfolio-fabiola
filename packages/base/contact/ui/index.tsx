import { EmailIcon, GithubIcon, LinkedInIcon  } from '../../../core/assets/svgIcons';
import './style.scss'

export const Contact = () => {
    return (
        <section className='contact'>
            <p>I'm open to connecting, sharing ideas, or exploring potential opportunities. I welcome any inquiries, collaborations, or discussions. Feel free to reach out to me through the following channels:</p>
            <section>
                <section className='contact__channels'>
                    {EmailIcon}
                    <a href='fabiola.broccolo@gmail.com' target='_blank'>fabiola.broccolo@gmail.com</a>
                </section>
                <section className='contact__channels'>
                    {LinkedInIcon}
                    <a href='linkedin.com/in/fabiola-poblete-662652114' target='_blank'>linkedin.com/in/fabiola-poblete-662652114</a>
                </section>
                <section className='contact__channels'>
                    {GithubIcon}
                    <a href='github.com/fabiolapoblete' target='_blank'>github.com/fabiolapoblete</a>
                </section>
            </section>
            <p>Don't hesitate to drop me a message—I look forward to hearing from you!</p>
        </section>
    )
}