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
                <label htmlFor="register_user" class="input">
                    <input type="text" name="register_user" id="register_user" placeholder="&nbsp;" />
                    <span className="label">User</span>
                </label>

                <label htmlFor="register_email" class="input">
                    <input type="email" name="register_email" id="register_email" placeholder="&nbsp;" />
                    <span className="label">Email</span>
                </label>

                <label htmlFor="register_password" class="input">
                    <input type="password" name="register_password" id="register_password" placeholder="&nbsp;" />
                    <span className="label">Password</span>
                </label>

                <button className="customBtn button" type="submit">
                    Register
                </button>
            </form>
        </div>
    )
}

export default Register
