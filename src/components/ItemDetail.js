import CategoriesList from "./CategoriesList";
import toast from "react-hot-toast";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { context } from "./Context";

const ItemDetail = ({ item, categories }) => {
    const addToCart = (stockAdded) => {
        addProduct(item, stockAdded);

        toast(`${item.name} (${stockAdded}) added to cart!`);
    };

    const { addProduct } = useContext(context);

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
                                <CategoriesList categories={categories} />
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
                            {/* <AddCartButton addToCart={addToCart} /> */}
                            <ItemCount itemStock={item.stock} onAdd={addToCart} />
                        </section>
                    </div>
                </footer>
            </div>
        );
};

export default ItemDetail;
