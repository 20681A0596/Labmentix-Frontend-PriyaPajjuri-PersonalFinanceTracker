import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <div className="header">
            <h1> 💰Personal Finance Tracker</h1>

            <button onClick={logout}>
                Logout
            </button>
        </div>
    );
}

export default Header;