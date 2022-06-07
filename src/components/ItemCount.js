import { useState } from "react"

const ItemCount = ({ itemStock, onAdd }) => {
    const [itemCount, setItemCount] = useState(0)

    const incrementItemCount = () => {
        if (itemCount < itemStock) setItemCount(itemCount + 1)
    }

    const decrementItemCount = () => {
        if (itemCount > 0) setItemCount(itemCount - 1)
    }

    const confirm = () => {
        if (itemCount <= 0) return

        onAdd(itemCount)
    }

    return (
        <div className="itemCount">
            <span className="itemCount__counter">
                <span className="material-icons icon--black button itemCount__minus" onClick={decrementItemCount}>
                    remove
                </span>

                <span className="itemCount__text">
                    {itemCount}/{itemStock}
                </span>
                <span onClick={incrementItemCount} className="material-icons icon--black button itemCount__plus">
                    add
                </span>
            </span>

            <span className="itemCount__cartButton button material-icons icon--black" onClick={confirm}>
                shopping_cart
            </span>
        </div>
    )
}

export default ItemCount
