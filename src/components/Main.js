import ItemListContainer from "./ItemListContainer";

const Main = (props) => {
    const name = "Franco";

    return (
        <>
            <ItemListContainer greeting={name} />
        </>
    );
};

export default Main;
