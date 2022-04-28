import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        setTimeout(() => {
            fetch("/data.json")
                .then((res) => res.json())
                .then((json) => {
                    const game = json.games.filter((x) => x.id == id);

                    setItem(game);
                });
        }, 1000);
    }, []);

    if (item === null) {
        return <Loader />;
    } else {
        return <ItemDetail item={item} />;
    }
};

export default ItemDetailContainer;
