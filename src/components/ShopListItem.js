const ShopListItem = ({ item }) => {
    console.log(item);
    return (
        <>
            <p>Name: {item.item.name}</p>
            <p>${item.item.price}</p>
            <p>Quantity: {item.quantity}</p>
        </>
    );
};

export default ShopListItem;
