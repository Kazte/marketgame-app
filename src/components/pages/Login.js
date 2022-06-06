import { useNavigate } from "react-router-dom"
import { useAuth } from "../AuthContext"
import { useEffect } from "react"

const Login = () => {
    const auth = useAuth()

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target))
        auth.signin(data.login_email, data.login_password)
    }

    useEffect(() => {
        if (auth.user) {
            navigate("/")
        }
    }, [auth.user])

    const navigate = useNavigate()

    return (
        <div className="login">
            <form className="login__form" onSubmit={handleLoginSubmit}>
                <div>
                    <label htmlFor="login_email">Email</label>
                    <input type="email" name="login_email" />
                </div>

                <div>
                    <label htmlFor="login_password">Password</label>
                    <input type="password" name="login_password" />
                </div>

                <div>
                    <button className="customBtn button" type="submit">
                        Login
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login
