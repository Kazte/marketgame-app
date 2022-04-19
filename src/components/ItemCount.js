import { useState } from "react";

const ItemCount = ({ itemStock }) => {
    const [itemCount, setItemCount] = useState(0);

    const incrementItemCount = () => {
        if (itemCount < itemStock) setItemCount(itemCount + 1);
    };

    const decrementItemCount = () => {
        if (itemCount > 0) setItemCount(itemCount - 1);
    };

    return (
        <>
            <button onClick={decrementItemCount}>-</button>

            <span>{itemCount}</span>

            <button onClick={incrementItemCount}>+</button>
        </>
    );
};

export default ItemCount;
