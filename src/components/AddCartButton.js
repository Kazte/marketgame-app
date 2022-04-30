const AddCartButton = ({ addToCart }) => {
    return (
        <div className="addCart">
            <button onClick={addToCart} className="addCart__btn">
                Add to Cart
            </button>
        </div>
    );
};

export default AddCartButton;
