import { useEffect, useState } from "react";

import ItemList from "./ItemList";

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
                cover: "https://cdn.akamai.steamstatic.com/steam/apps/381210/header.jpg",
            },
            {
                id: 1,
                name: "Forgive Me Father",
                description:
                    "Forgive Me Father is a dark retro horror FPS set in a comic book style world inspired by the novels of H.P. Lovecraft. As the only one left with full senses, you begin a journey in search of answers and relief. How long can you last.",
                price: 15,
                stock: 10,
                cover: "https://cdn.akamai.steamstatic.com/steam/apps/1590910/header.jpg",
            },
            {
                id: 2,
                name: "ULTRAKILL",
                description:
                    "ULTRAKILL is a fast-paced ultraviolent retro FPS combining the skill-based style scoring from character action games with unadulterated carnage inspired by the best shooters of the '90s. Rip apart your foes with varied destructive weapons and shower in their blood to regain your health.",
                price: 15,
                stock: 10,
                cover: "https://cdn.akamai.steamstatic.com/steam/apps/1229490/header.jpg",
            },
            {
                id: 3,
                name: "ELDEN RING",
                description: "THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
                price: 15,
                stock: 7,
                cover: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg",
            },
            {
                id: 4,
                name: "For The King",
                description:
                    "For The King is a strategic RPG that blends tabletop and roguelike elements in a challenging adventure that spans the realms. Set off on a single player experience or play cooperatively both online and locally.",
                price: 15,
                stock: 7,
                cover: "https://cdn.akamai.steamstatic.com/steam/apps/527230/header.jpg",
            },
        ],
    };

    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log("Pido productos");

        setTimeout(() => {
            setItems(games.games);
        }, 2000);
    }, []);

    return <ItemList items={items} />;
};

export default ItemListContainer;
