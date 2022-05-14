import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import Loader from "./Loader"
import { db } from "../Firebase"
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)

    const { gameId } = useParams()

    useEffect(() => {
        // const productsCollection = collection(db, "products")
        const productCollection = doc(db, "products", gameId)

        getDoc(productCollection).then((ds) => {
            if (ds.exists()) {
                const prod = {
                    id: ds.id,
                    ...ds.data(),
                }

                const cats = [...prod.categories]

                prod.categories = []

                cats.forEach((c, i) => {
                    prod.categories.push({ id: i, name: c })
                })

                setItem(prod)
            }
        })
    }, [gameId])

    if (item === null) {
        return <Loader />
    } else {
        return <ItemDetail item={item} />
    }
}

export default ItemDetailContainer
