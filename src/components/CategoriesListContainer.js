import CategoriesList from "./CategoriesList";
import Loader from "./Loader";

import { useState, useEffect } from "react";

const CategoriesListContainer = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetch("/data.json")
                .then((res) => res.json())
                .then((json) => {
                    setCategories(json.categories);
                });
        }, 1000);
    }, []);
    if (categories.length === 0) {
        return <Loader />;
    } else {
        return <CategoriesList categories={categories} />;
    }
};

export default CategoriesListContainer;
