import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ItemList from "./../ItemList"
import Loader from "./../Loader"

import { db } from "../../Firebase"

import { collection, query, where, getDocs } from "firebase/firestore"

const ItemListContainer = () => {
    const [items, setItems] = useState(null)

    const { categoryId: categoryName, searchText } = useParams()

    useEffect(() => {
        if (categoryName === undefined) {
            if (searchText === undefined) {
                const productsCollection = collection(db, "products")
                const query = getDocs(productsCollection)

                query.then((res) => {
                    const products = res.docs.map((doc) => {
                        const prod = {
                            id: doc.id,
                            ...doc.data(),
                        }
                        return prod
                    })
                    setItems(products)
                })
            } else {
                const searchString = searchText.toLowerCase()
                const productsCollection = collection(db, "products")
                const query = getDocs(productsCollection)

                query.then((res) => {
                    const docs = res.docs.filter((d) => d.data().name.toLowerCase().includes(searchString))

                    const products = docs.map((doc) => {
                        const prod = {
                            id: doc.id,
                            ...doc.data(),
                        }
                        return prod
                    })

                    setItems(products)
                })
            }
        } else {
            const productsCollection = collection(db, "products")

            const q = query(productsCollection, where("categories", "array-contains", categoryName))

            getDocs(q).then((qs) => {
                const prod = qs.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data(),
                    }
                })

                setItems(prod)
            })
        }
    }, [categoryName, searchText])

    if (items === null) {
        return <Loader />
    } else {
        if (categoryName === undefined) {
            return (
                <>
                    <ItemList items={items} />
                </>
            )
        } else {
            return (
                <>
                    <h1 className="title">{categoryName}</h1>
                    <ItemList items={items} />
                </>
            )
        }
    }
}

export default ItemListContainer
