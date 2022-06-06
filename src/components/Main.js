import { Route, Routes } from "react-router-dom"
import CartShop from "./pages/CartShop"
import Categories from "./pages/Categories"
import Home from "./pages/Home"
import ItemDetailContainer from "./pages/ItemDetailContainer"
import ItemListContainer from "./pages/ItemListContainer"
import User from "./pages/User"
import Shoppings from "./pages/Shoppings"
import Register from "./pages/Register"
import Login from "./pages/Login"

const Main = () => {
    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:gameId" element={<ItemDetailContainer />} />
                <Route path="/products/:categoryId" element={<ItemListContainer />} />
                <Route path="/myshopping" element={<Shoppings />} />
                <Route path="/cart" element={<CartShop />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/user" element={<User />} />
                <Route path="/search/:searchText" element={<ItemListContainer />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </main>
    )
}

export default Main
