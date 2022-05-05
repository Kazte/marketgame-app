import { useState, createContext } from "react";
export const context = createContext();

const { Provider } = context;

const CustomProvider = ({ children }) => {
    const [total, setTotal] = useState(0);
    const [total_price, setTotal_price] = useState(0);
    const [items, setItems] = useState([]);

    const addProduct = (product, quantity) => {
        if (!inCart(product)) {
            setItems([...items, product]);
        }

        setTotal(total + quantity);
    };

    const removeProduct = (id) => {};

    const clearCart = () => {
        setItems([]);
    };

    const inCart = (product) => {
        return items.includes(product);
    };

    const contextValue = {
        total,
        total_price,
        items,
    };
    return <Provider value={contextValue}>{children}</Provider>;
};

export default CustomProvider;
