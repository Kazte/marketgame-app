import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

import "./style.scss"

const App = () => {
    return (
        <>
            <Header />
            <Main>
                <p>Hello World</p>
                <p>Hello World Second</p>
            </Main>
            <Footer />
        </>
    )
}

export default App
