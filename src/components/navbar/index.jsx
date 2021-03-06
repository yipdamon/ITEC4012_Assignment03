import {
    NavLink
} from 'react-router-dom';
import "./styles.css";


export const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li>
                    <NavLink exact={true} activeClassName="nav-selected" to="/">
                        Phone Store
                    </NavLink> 
                </li>
            </ul>
        </nav>
    )
}