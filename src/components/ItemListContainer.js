import { useEffect, useState } from "react"

import ItemList from "./ItemList"

const ItemListContainer = () => {
    const games = {
        games: [
            {
                id: 0,
                name: "Dead by Daylight",
                description:
                    "Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught and killed.",
                price: 15,
                stock: 15,
            },
            {
                id: 1,
                name: "Forgive Me Father",
                description:
                    "Forgive Me Father is a dark retro horror FPS set in a comic book style world inspired by the novels of H.P. Lovecraft. As the only one left with full senses, you begin a journey in search of answers and relief. How long can you last.",
                price: 15,
                stock: 10,
            },
            {
                id: 2,
                name: "ULTRAKILL",
                description:
                    "ULTRAKILL is a fast-paced ultraviolent retro FPS combining the skill-based style scoring from character action games with unadulterated carnage inspired by the best shooters of the '90s. Rip apart your foes with varied destructive weapons and shower in their blood to regain your health.",
                price: 15,
                stock: 10,
            },
        ],
    }

    const [items, setItems] = useState([])

    useEffect(() => {
        console.log("Pido productos")

        setTimeout(() => {
            setItems(games.games)
        }, 2000)
    }, [])

    return <ItemList items={items} />
}

export default ItemListContainer
