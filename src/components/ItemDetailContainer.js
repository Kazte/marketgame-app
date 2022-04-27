import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch("data.json")
                .then((res) => res.json())
                .then((json) => {
                    const game = json.games[1];
                    console.log(game);
                    setItem(game);
                });
        }, 5000);
    }, []);

    if (item === null) {
        return <Loader />;
    } else {
        return <ItemDetail item={item} />;
    }
};

export default ItemDetailContainer;
