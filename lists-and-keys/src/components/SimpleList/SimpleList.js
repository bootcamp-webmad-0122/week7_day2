const SimpleList = () => {

    const drinks = ['Cacaolat', 'Cervemocho', 'Jagger', 'Agua']

    return (
        <section className="list">

            <h2>Listado de bebidas</h2>

            {
                drinks.map((elm, idx) => {
                    return <p key={idx}>{elm}</p>
                })
            }

        </section>
    )
}


export default SimpleList