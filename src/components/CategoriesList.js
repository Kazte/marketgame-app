import { Link } from "react-router-dom";

const CategoriesList = ({ categories }) => {
    return (
        <div className="categoriesList">
            {categories.map((c) => {
                return (
                    <div key={c.id} className="categoriesList__item">
                        <Link className="categoriesList__item__link" to={`/products/${c.id}`}>
                            {c.name}
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default CategoriesList;
