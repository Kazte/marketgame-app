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
        <div className="itemCount">
            <span className="itemCount__minus" onClick={decrementItemCount}>
                -
            </span>

            <span className="itemCount__text">{itemCount}</span>

            <span className="itemCount__plus" onClick={incrementItemCount}>
                +
            </span>
        </div>
    );
};

export default ItemCount;
