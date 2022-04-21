import { useEffect } from "react"
import ItemCount from "./ItemCount"

const ItemCard = ({ item }) => {
    const onAdd = (itemCount) => {
        console.log(itemCount)
    }

    return (
        <div className="itemCard">
            <header className="itemCard__header">
                <h2>{item.name}</h2>
            </header>
            <hr />
            <main className="itemCard__main">
                <p className="itemCard__main__description">{item.description}</p>
            </main>
            <footer className="itemCard__footer">
                <ItemCount className="itemCard__footer__counter" itemStock={item.stock} onAdd={onAdd} />
            </footer>
        </div>
    )
}

export default ItemCard
