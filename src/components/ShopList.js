import ShopListItem from "./ShopListItem"

const ShopList = ({ items }) => {
    return (
        <div>
            <ul>
                {items.map((i) => (
                    <li key={i.item.id}>
                        <ShopListItem item={i} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShopList
