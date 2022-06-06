import { collection, query, getDocs, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import ShoppingList from "./ShoppingList"
import { db } from "../Firebase"
import Button from "./Button"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./AuthContext"

const ShoppingListContainer = () => {
    const navigate = useNavigate()

    const auth = useAuth()

    const handleBackHome = () => {
        navigate("/")
    }

    const [items, setItems] = useState(null)

    useEffect(() => {
        if (!auth.user) return
        const ordersCollection = collection(db, "orders")

        const q = query(ordersCollection, where("buyer_uid", "==", auth.user.uid))

        getDocs(q).then((res) => {
            const orders = res.docs.map((doc) => {
                let items = {
                    id: doc.id,
                    items: [...doc.data().items],
                }

                return items
            })

            let items = []

            for (let i = 0; i < orders.length; i++) {
                const order = orders[i]

                for (let j = 0; j < order.items.length; j++) {
                    const e = order.items[j]

                    if (items.find((x) => x.name === e.item.name)) {
                        continue
                    }

                    items.push(e.item)
                }
            }

            // orders.forEach((order) => {
            //     order.items.forEach((e) => {
            //         console.log(e.item)

            //         if (item) {
            //         }

            //         items.push(e.item)
            //     })
            // })

            setItems(items)
        })
    }, [])

    return (
        <>
            {auth.user ? (
                <>
                    {items ? (
                        <>
                            <ShoppingList items={items} />
                        </>
                    ) : (
                        <>
                            <h2>It seems that there is nothing here, do you want to go back?</h2>
                            <Button text="Home" onClick={handleBackHome} />
                        </>
                    )}{" "}
                </>
            ) : (
                <h1>You must Login First</h1>
            )}
        </>
    )
}

export default ShoppingListContainer
