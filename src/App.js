import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { Toaster } from "react-hot-toast"

import { BrowserRouter } from "react-router-dom"

import "./style.scss"
import CustomProvider from "./components/CartContext"

import { db } from "./Firebase"

import { collection, getDocs, doc, addDoc } from "firebase/firestore"

const App = () => {
    return (
        <CustomProvider>
            <BrowserRouter>
                <Header />
                <Main />
                <Footer />
                <Toaster
                    toastOptions={{
                        duration: 2000,
                        className: "",
                        position: "center",
                        containerStyle: {
                            bottom: 40,
                        },
                        style: {
                            border: "1px solid #f4f4f4",
                            padding: "16px",
                            color: "#f4f4f4",
                            borderRadius: 0,
                            backgroundColor: "#494949",
                            boxShadow: "0px 2px 10px 5px rgba(0, 0, 0, 0.2)",
                        },
                    }}
                />
            </BrowserRouter>
        </CustomProvider>
    )
}

export default App
