import { useNavigate } from "react-router-dom"
import "./logout.css"

const Logout = () => {
    const nav = useNavigate()
    const logoutHandle = (e) => {
        e.preventDefault();
        localStorage.clear();
        nav("/")
    }
    
    const handleProfile = (e) => {
        e.preventDefault();
        nav("/profile")
    }

    return (
        <div className="row">
        <button className="logout" onClick={(e)=>handleProfile(e)}>Profile</button>
        <button className="logout" onClick={(e)=>logoutHandle(e)}>Logout</button>
        </div>
    )
}
export default Logout

