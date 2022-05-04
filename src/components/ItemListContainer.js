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

                            console.log("All");
                        } else {
                            setItems(games.filter((g) => g.name.includes(searchText)));

                            console.log("Search");
                        }
                    } else {
                        const categories = json.categories.filter((x) => x.id === parseInt(categoryId));
                        setItems(games.filter((g) => g.categories.includes(parseInt(categoryId))));
                        setCategory(categories);

                        console.log("Category");
                    }
                });
        }, 2000);

        // if (categoryId === undefined && searchText === undefined) {
        //     setTimeout(() => {
        //         fetch("/data.json")
        //             .then((res) => res.json())
        //             .then((json) => {
        //                 setItems(json.games);
        //             });
        //     }, 1000);
        // } else if (categoryId !== undefined) {
        //     setTimeout(() => {
        //         fetch("/data.json")
        //             .then((res) => res.json())
        //             .then((json) => {
        //                 const games = json.games.filter((g) => g.categories.includes(parseInt(categoryId)));
        //                 setItems(games);
        //             });
        //     }, 1000);

        //     fetch("/data.json")
        //         .then((res) => res.json())
        //         .then((json) => {
        //             const cat = json.categories.filter((x) => x.id === parseInt(categoryId));
        //             console.log(cat[0]);
        //             setCategory(cat[0]);
        //         });
        // } else if (searchText !== undefined) {
        //     console.log("Search");
        //     setTimeout(() => {
        //         fetch("/data.json")
        //             .then((res) => res.json())
        //             .then((json) => {
        //                 const games = json.games.filter((g) => g.name.includes(searchText));

        //                 setItems(games);
        //             });
        //     }, 1000);
        // }
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
