import Button from "./Button"

const ShopListItem = ({ item, handleDeleteItem }) => {
    return (
        <div className="shopItem">
            <p className="shopItem__title">{item.item.name}</p>
            <img className="shopItem__cover" src={item.item.cover} alt={`${item.item.name} cover`} />
            <p className="shopItem__price">${item.item.price}</p>
            <p className="shopItem__quantity">{item.quantity}</p>
            <Button onClick={() => handleDeleteItem(item)} text="Delete" />
        </div>
    )
}

export default ShopListItem
