import { useState, useEffect } from "react";

const Presentational = () => {
    const [count, setcount] = useState(0);

    const [dark, setDark] = useState(false);

    useEffect(() => {
        console.log("NuevoRender");
    }, []);

    const handleClick = (e) => {
        setcount(count + 1);
    };

    const toggleDark = (e) => {
        setDark(!dark);
    };

    return (
        <div>
            <p>Contador actual: {count}</p>
            <p>Modo dark: {dark ? "true" : "false"}</p>
            <button onClick={handleClick}>Click</button>
            <input onClick={toggleDark} type="checkbox" name="darkTheme" id="darkThemeCheckbox" />
        </div>
    );
};

export default Presentational;
