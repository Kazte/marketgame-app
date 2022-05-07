import { Route, Routes } from "react-router-dom";
import CartShop from "./CartShop";
import Categories from "./Categories";
import Home from "./Home";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";
import User from "./User";

const Main = () => {
    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:gameId" element={<ItemDetailContainer />} />
                <Route path="/products/:categoryId" element={<ItemListContainer />} />
                <Route path="/myshopping" element={<p>My Shoppings</p>} />
                <Route path="/cart" element={<CartShop />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/user" element={<User />} />
                <Route path="/search/:searchText" element={<ItemListContainer />} />
            </Routes>
        </main>
    );
};

export default Main;
