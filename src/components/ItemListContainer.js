import { useEffect, useState } from "react";

import ItemList from "./ItemList";
import Loader from "./Loader";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch("data.json")
                .then((res) => res.json())
                .then((json) => {
                    setItems(json.games);
                });
        }, 2000);
    }, []);

    if (items.length === 0) {
        return <Loader />;
    } else {
        return <ItemList items={items} />;
    }
};

export default ItemListContainer;
