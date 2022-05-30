import { createContext, useContext, useState } from "react"
import { firebaseApp } from "./../Firebase"

export const authContext = createContext()

const { Provider } = authContext

const AuthContextProvider = (props) => {
    const auth = useProviderAuth()
    return <Provider value={{ state: state }}>{props.children}</Provider>
}

export default AuthContextProvider

export const useAuth = () => {
    return useContext(authContext)
}

const useProviderAuth = () => {
    const [user, setUser] = useState(null)

    const signin = (email, password) => {
        return firebaseApp
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                setUser(response.user)
                return response.user
            })
    }

    const signup = (email, password) => {
        return firebaseApp
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                setUser(response.user)
                return response.user
            })
    }

    const signout = () => {
        return firebaseApp
            .auth()
            .signOut()
            .then(() => {
                setUser(false)
            })
    }

    return {
        user,
        signin,
        signup,
        signout,
    }
}
