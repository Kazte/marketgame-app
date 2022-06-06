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
                <label htmlFor="login_email" class="input">
                    <input type="text" name="login_email" id="login_email" placeholder="&nbsp;" />
                    <span className="label">Email</span>
                </label>

                <label htmlFor="login_password" class="input">
                    <input type="password" name="login_password" id="login_password" placeholder="&nbsp;" />
                    <span className="label">Password</span>
                </label>

                <button className="customBtn button" type="submit">
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login
