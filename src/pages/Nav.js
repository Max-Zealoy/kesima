import React from 'react'
import {Link} from "react-router-dom";

function Nav() {
    return (
        <nav className="main-nav">
            <ul>
                {/* a-taggs makes the page reload */}
                {/* <li><a href="/">Home</a></li>
                <li><a href="/manage-puns">Manage Puns</a></li> */}

                {/* Use Links to navigate smoother, withour reloading the page */}
                <Link to="/">Home</Link>
                <Link to="/admin/manage-items">Manage Items</Link>
                <Link to="/create-items">Create Items</Link>

            </ul>
        </nav>
    )
}

export default Nav
