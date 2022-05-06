import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList";
import Loader from "./Loader";

const ItemListContainer = () => {
    const [items, setItems] = useState(null);

    const [category, setCategory] = useState(undefined);

    const { categoryId, searchText } = useParams();

    useEffect(() => {
        setItems(null);
        setTimeout(() => {
            fetch("/data.json")
                .then((res) => res.json())
                .then((json) => {
                    const games = json.games;

                    if (categoryId === undefined) {
                        if (searchText === undefined) {
                            setItems(games);
                        } else {
                            setItems(games.filter((g) => g.name.toLowerCase().includes(searchText.toLowerCase())));
                        }
                    } else {
                        const categories = json.categories.filter((x) => x.id === parseInt(categoryId));
                        setItems(games.filter((g) => g.categories.includes(parseInt(categoryId))));
                        setCategory(categories);
                    }
                });
        }, 2000);
    }, [categoryId, searchText]);

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
