import ItemCard from "./ItemCard"

const ItemList = ({ items }) => {
    return (
        <div className="itemListCointainer">
            {items.map((i) => (
                <ItemCard key={i.id} item={i} />
            ))}
        </div>
    )
}

export default ItemList
