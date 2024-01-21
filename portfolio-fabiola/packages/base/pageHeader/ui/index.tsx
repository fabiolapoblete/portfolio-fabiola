import './style.scss'

export const PageHeader = ({title}:{title: string}) => {
    return (
        <section className='pageHeader'>
            <h2 className='pageHeader__title'>{title}</h2>
            <hr className='pageHeader__line'/>
        </section>
    )
}