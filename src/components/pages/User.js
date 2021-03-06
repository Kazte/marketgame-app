import { useNavigate } from "react-router-dom"
import { useAuth } from "../AuthContext"
import Button from "../Button"

const User = () => {
    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogOut = () => {
        auth.signout()
        navigate("/")
    }

    return (
        <>
            {auth.user ? (
                <>
                    <div className="user">
                        <h2 className="user__displayname">{auth.user.displayName}</h2>
                        <h2 className="user__email">{auth.user.email}</h2>
                        <Button className="user__logout" onClick={handleLogOut} text="Log Out" />
                    </div>
                </>
            ) : (
                <h1>You must Login First</h1>
            )}
        </>
    )
}

export default User
