import { Link } from "react-router-dom";
import AddCartButton from "./AddCartButton";

const ItemDetail = ({ item, categories }) => {
    if (item)
        return (
            <div className="itemDetail">
                <header>
                    <h1 className="itemDetail__title">{item.name}</h1>
                </header>
                <main>
                    <section className="itemDetail__main">
                        <div className="itemDetail__main__cover">
                            <img src={item.cover} alt="" />
                        </div>

                        <div className="itemDetail__main__description">
                            <div>{item.description}</div>
                            <div className="itemDetail__main__description__categoriesList">
                                {categories.map((c) => {
                                    return (
                                        <div key={c.id} className="itemDetail__main__description__categoriesList__item">
                                            <Link className="itemDetail__main__description__categoriesList__item__link" to={`/products/${c.id}`}>
                                                {c.name}
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                </main>
                <footer>
                    <div className="itemDetail__footer">
                        <section className="itemDetail__footer__title">
                            <h4>Buy {item.name}</h4>
                        </section>
                        <section className="itemDetail__footer__buySection">
                            ${item.price}
                            <AddCartButton />
                        </section>
                    </div>
                </footer>
            </div>
        );
};

export default ItemDetail;
