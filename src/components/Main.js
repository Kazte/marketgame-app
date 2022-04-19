import Container from "./Container";
import ItemListContainer from "./ItemListContainer";

const Main = (props) => {
    const name = "Franco";

    return (
        <>
            <ItemListContainer greeting={name} />
            <Container />
        </>
    );
};

export default Main;
