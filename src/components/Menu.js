import { NavLink } from 'react-router-dom';

function Menu() {
    return (
        <nav className="menu" data-testid="menu">
            <div className="nav-wrapper container">
                <NavLink to="/" className="brand-logo left">JS Assignment</NavLink>
                <ul className="right">
                    <li><NavLink activeClassName="active" to="/todos">My Todos</NavLink></li>
                    <li><NavLink activeClassName="active" to="/songs">Songs</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Menu;