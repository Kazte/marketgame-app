import Presentational from "./Presentational";

const Container = () => {
    const users = ["Juan", "Pedro", "Maria", "Ana"];

    return <Presentational users={users} />;
};

export default Container;
