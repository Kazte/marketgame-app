import CategoriesList from "./CategoriesList"
import Loader from "./Loader"

import { useState, useEffect } from "react"

import { db } from "../Firebase"
import { collection, getDocs } from "firebase/firestore"

const CategoriesListContainer = () => {
    const [categories, setCategories] = useState(null)

    useEffect(() => {
        const productsCollection = collection(db, "categories")
        const query = getDocs(productsCollection)

        query.then((res) => {
            const cats = res.docs.map((doc) => {
                const cat = {
                    id: doc.id,
                    ...doc.data(),
                }
                return cat
            })

            setCategories(cats)
        })
    }, [])

    return <>{categories === null ? <Loader /> : <CategoriesList categories={categories} />}</>
}

export default CategoriesListContainer
