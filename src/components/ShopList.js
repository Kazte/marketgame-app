import ShopListItem from "./ShopListItem";

const ShopList = ({ items }) => {
    return (
        <div>
            <ul>
                {items.map((i) => (
                    <li>
                        <ShopListItem key={i.item.id} item={i} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShopList;
