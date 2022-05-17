import ShopListItem from "./ShopListItem"
import { useContext } from "react"
import { cartContext } from "./CartContext"
import Button from "./Button"

const ShopList = ({ items }) => {
    const { removeItem } = useContext(cartContext)

    const handleDeleteItem = (item) => {
        removeItem(item.item.id)
    }

    return (
        <div className="shopList">
            <ul>
                {items.map((i) => (
                    <li key={i.item.id}>
                        <ShopListItem item={i} handleDeleteItem={handleDeleteItem} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShopList
