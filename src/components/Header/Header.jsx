import React from 'react';

const Header = ({title}) => {
    return (
        <nav className="nav-wrapper light-blue darken-">
            <a href="#!" className="brand-logo center">{title}</a>    
        </nav>
    )
}

export default Header
