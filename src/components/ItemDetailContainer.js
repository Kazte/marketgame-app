import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [categories, setCategories] = useState([]);

    const { gameId } = useParams();

    useEffect(() => {
        setTimeout(() => {
            fetch("/data.json")
                .then((res) => res.json())
                .then((json) => {
                    const game = json.games.filter((x) => x.id == gameId)[0];
                    const cat = json.categories;

                    const gameCategories = [];

                    cat.forEach((c) => {
                        if (game.categories.includes(c.id)) {
                            gameCategories.push(c);
                        }
                    });

                    setItem(game);
                    setCategories(gameCategories);
                });
        }, 1000);
    }, [gameId]);

    if (item === null) {
        return <Loader />;
    } else {
        return <ItemDetail item={item} categories={categories} />;
    }
};

export default ItemDetailContainer;
