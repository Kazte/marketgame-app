import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../AuthContext"
import { useEffect } from "react"

const Register = () => {
    const auth = useAuth()

    const handleRegisterSubmit = (e) => {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target))
        auth.signup(data.register_user, data.register_email, data.register_password)
    }

    const navigate = useNavigate()

    useEffect(() => {
        if (auth.user) {
            navigate("/")
        }
    }, [auth.user])

    return (
        <div className="register">
            <form className="register__form" onSubmit={handleRegisterSubmit}>
                <div>
                    <label htmlFor="register_user">User</label>
                    <input type="text" name="register_user" />
                </div>

                <div>
                    <label htmlFor="register_email">Email</label>
                    <input type="email" name="register_email" />
                </div>

                <div>
                    <label htmlFor="register_password">Password</label>
                    <input type="password" name="register_password" />
                </div>

                <div>
                    <button className="customBtn button" type="submit">
                        Register
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Register
