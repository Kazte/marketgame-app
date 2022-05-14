import CategoriesList from "./CategoriesList"
import toast from "react-hot-toast"
import ItemCount from "./ItemCount"
import { useContext, useState } from "react"
import { cartContext } from "./CartContext"
import Button from "./Button"
import { useNavigate } from "react-router-dom"

const ItemDetail = ({ item }) => {
    const [itemQuantity, setItemQuantity] = useState(undefined)

    const { addItem } = useContext(cartContext)

    const navigate = useNavigate()

    const addToCart = (stockAdded) => {
        setItemQuantity(stockAdded)

        addItem(item, stockAdded)

        toast(`${item.name} (${stockAdded}) added to cart!`)
    }

    const handleFinish = () => {
        navigate("/cart")
    }

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
                                <CategoriesList categories={item.categories} />
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
                            {itemQuantity === undefined ? <ItemCount itemStock={item.stock} onAdd={addToCart} /> : <Button text="Finish" onClick={handleFinish} />}
                        </section>
                    </div>
                </footer>
            </div>
        )
}

export default ItemDetail
