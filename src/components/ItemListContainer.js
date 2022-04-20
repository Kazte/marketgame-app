import ItemCard from "./ItemCard";

const ItemListContainer = ({ greeting }) => {
    const items = {
        games: [
            {
                id: 0,
                name: "Dead by Daylight",
                description:
                    "Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught and killed.",
                stock: 15,
            },
        ],
    };

    return (
        <div className="itemListCointainer">
            <ItemCard item={items.games[0]} />
            <ItemCard item={items.games[0]} />
            <ItemCard item={items.games[0]} />
            <ItemCard item={items.games[0]} />
            <ItemCard item={items.games[0]} />
        </div>
    );
};

export default ItemListContainer;
