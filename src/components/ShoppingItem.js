const ShoppingItem = ({ item }) => {
    return (
        <div className="shoppingItem">
            <p className="shoppingItem__title">{item.name}</p>
            <img className="shoppingItem__cover" src={item.cover} alt={`${item.name} cover`} />
            <p className="shoppingItem__description">{item.description}</p>
        </div>
    )
}

export default ShoppingItem
