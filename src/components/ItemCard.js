import ItemCount from "./ItemCount";

const ItemCard = ({ item }) => {
    const onAdd = (itemCount) => {
        console.log(itemCount);
    };

    return (
        <div
            className="itemCard"
            onClick={() => {
                console.log("Open " + item.name);
            }}
        >
            <header className="itemCard__header">
                <h2>{item.name}</h2>
            </header>
            <main className="itemCard__main">
                <div>
                    <img src={item.cover} alt="" />
                </div>

                <div>
                    <p className="itemCard__main__description">{item.description}</p>
                </div>
            </main>
            <footer className="itemCard__footer">
                <p className="itemCard__footer__price">${item.price}</p>
            </footer>
        </div>
    );
};

export default ItemCard;
