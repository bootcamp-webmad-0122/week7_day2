import { projects as projectsFromFakeApi } from './../../fakeApi'

const ProjectsList = () => {

    return (
        <section className="list">
            <h2>Proyectos</h2>

            {
                projectsFromFakeApi.map(elm => {
                    return (
                        <article key={elm._id}>
                            <h3>{elm.name}</h3>
                            <p>Tech Stack: {elm.techStack}</p>
                        </article>
                    )
                })
            }
        </section>
    )

}

export default ProjectsList