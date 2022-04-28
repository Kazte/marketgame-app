import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList";
import Loader from "./Loader";

const ItemListContainer = () => {
    const [items, setItems] = useState(null);

    const [category, setCategory] = useState(undefined);

    const { categoryId } = useParams();

    useEffect(() => {
        if (categoryId === undefined) {
            setTimeout(() => {
                fetch("/data.json")
                    .then((res) => res.json())
                    .then((json) => {
                        setItems(json.games);
                    });
            }, 1000);
        } else {
            setTimeout(() => {
                fetch("/data.json")
                    .then((res) => res.json())
                    .then((json) => {
                        const games = json.games.filter((g) => g.categories.includes(parseInt(categoryId)));
                        setItems(games);
                    });
            }, 1000);

            fetch("/data.json")
                .then((res) => res.json())
                .then((json) => {
                    const cat = json.categories.filter((x) => x.id === parseInt(categoryId));
                    console.log(cat[0]);
                    setCategory(cat[0]);
                });
        }
    }, [categoryId]);

    if (items === null) {
        return <Loader />;
    } else {
        if (categoryId === undefined) {
            return (
                <>
                    <ItemList items={items} />
                </>
            );
        } else {
            return (
                <>
                    <h1 className="title">{category.name}</h1>
                    <ItemList items={items} />
                </>
            );
        }
    }
};

export default ItemListContainer;
