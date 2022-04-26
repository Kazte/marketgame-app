import Aside from "./Aside";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";

const Main = () => {
    return (
        <main className="main">
            <h1 className="main__title">Top Games of the Week</h1>
            <section className="main__games">
                <Aside />
                <ItemListContainer />
            </section>
            <section>
                <ItemDetailContainer />
            </section>
        </main>
    );
};

export default Main;
