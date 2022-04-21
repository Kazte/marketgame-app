import { useState, useEffect } from "react"

const Presentational = () => {
    // Estados: variable interna del componente que cambia a traves del tiempo
    const counterState = useState(0)

    const counter = counterState[0]
    const setCounter = counterState[1]

    const handleClick = () => {
        if (counter >= 8) return

        setCounter(counter + 1)
    }

    const [dark, setDark] = useState(false)

    useEffect(() => {
        console.log("NuevoRender")
    }, [])

    const toggleDark = () => {
        setDark(!dark)
    }

    return (
        <div>
            <p>Contador actual: {counter}</p>
            <p>Modo dark: {dark ? "true" : "false"}</p>
            <button onClick={handleClick}>Click</button>
            <input
                onClick={toggleDark}
                type="checkbox"
                name="darkTheme"
                id="darkThemeCheckbox"
            />
        </div>
    )
}

export default Presentational
