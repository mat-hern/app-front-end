import { Link } from "react-router-dom";

const Header = () => {
    return (
    <div>
        <ul>
            <li><Link to="login">Home</Link></li>
            <li><Link to="my-devices">My devices</Link></li>
        </ul>
    </div>
    )
}

export default Header;