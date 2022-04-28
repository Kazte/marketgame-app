import { Link } from "react-router-dom";

const CategoriesList = ({ categories }) => {
    return (
        <div className="categories">
            <h1 className="title">Categories</h1>
            <div className="categoriesList">
                {categories.map((c) => {
                    return (
                        <div key={c.id} className="categoriesList__item">
                            <Link to={`/products/${c.id}`}>{c.name}</Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CategoriesList;
