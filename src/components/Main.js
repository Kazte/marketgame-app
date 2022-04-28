import { Route, Routes } from "react-router-dom";
import Aside from "./Aside";
import CartShop from "./CartShop";
import CategoriesListContainer from "./CategoriesListContainer";
import Home from "./Home";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";

const Main = () => {
    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:gameId" element={<ItemDetailContainer />} />
                <Route path="/products/:categoryId" element={<ItemListContainer />} />
                <Route path="/myshopping" element={<p>My Shoppings</p>} />
                <Route path="/cart" element={<CartShop />} />
                <Route path="/categories" element={<CategoriesListContainer />} />
                <Route path="/user/:username" element={<p>User</p>} />
            </Routes>
        </main>
    );
};

export default Main;
