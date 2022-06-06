import ShoppingItem from "./ShoppingItem"

const ShoppingList = ({ items }) => {
    return (
        <>
            <div className="shopList">
                <ul>
                    {items.map((i, index) => {
                        return (
                            <li key={index}>
                                <ShoppingItem item={i} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default ShoppingList
