import { NavLink } from 'react-router-dom';

function Navbar() {
    return(<>
    <nav>
        <ul>
            <li>
                <NavLink to="/">Greeting</NavLink>

            </li>
            <li>
                <NavLink to="/counter">Counter</NavLink>
            </li>
            <li>
                <NavLink to="/todo">Todo</NavLink>
            </li>
            <li>

                <NavLink to="/edit-todo">EditTodo</NavLink>
            </li>
            <li>
                <NavLink to="/timer">Timer</NavLink>
            </li>
            <li>
                <NavLink to="/conditions">Conditions</NavLink>
            </li>
            <li>
                <NavLink to="/crud">Crud</NavLink>
            </li>
            <li>
                <NavLink to="/digital-clock">Digital Clock</NavLink>
            </li>
            <li>
                <NavLink to="/analog-clock">Analog Clock</NavLink>
            </li>
            <li>
                <NavLink to="/shopping-cart">Shopping Cart</NavLink>
            </li>
        </ul>
    </nav>
    </>)
}

export default Navbar