import ItemListContainer from "./ItemListContainer"

const Home = () => {
    return (
        <>
            <h1 className="main__title">Games</h1>
            <section className="main__games">
                <ItemListContainer />
            </section>
        </>
    )
}

export default Home
