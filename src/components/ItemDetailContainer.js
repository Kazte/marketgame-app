import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch("data.json")
                .then((res) => res.json())
                .then((json) => {
                    const game = json.games[1];

                    setItem(game);
                });
        }, 2000);
    }, []);

    return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
