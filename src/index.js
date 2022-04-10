// 1- Tener la variable react en scope
import React from "react";

// 2- Tener la variable reactDOM en scope
import ReactDOM from "react-dom";

// 3- tener la variable App en scope
function App() {
    return <h1>Hola mundo</h1>;
}

// 4- Hacer render de la app
ReactDOM.render(<App />, document.getElementById("root"));
