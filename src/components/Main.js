import { Route, Routes } from "react-router-dom";
import Aside from "./Aside";
import CartShop from "./CartShop";
import Home from "./Home";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";

const Main = () => {
    return (
        <main className="main">
            {/* <h1 className="main__title">Top Games of the Week</h1>
            
            <section>
                <ItemDetailContainer />
            </section> */}
            {/* <Route></Route>
            <Routes></Routes> */}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ItemDetailContainer />} />
                <Route path="/products/:category" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<CartShop />} />
            </Routes>
        </main>
    );
};

export default Main;
