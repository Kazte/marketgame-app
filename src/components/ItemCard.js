import ItemCount from "./ItemCount";

const ItemCard = ({ item }) => {
    return (
        <div className="itemCard">
            <header className="itemCard__header">
                <h2>Item Name</h2>
            </header>
            <hr />
            <main className="itemCard__main">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, maxime?</p>
            </main>
            <footer className="itemCard__footer">
                <ItemCount itemStock={item.stock} />
            </footer>
        </div>
    );
};

export default ItemCard;
