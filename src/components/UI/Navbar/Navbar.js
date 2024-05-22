import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {
    const signOut = () => {

    };
    return (
        <nav className='navbar'>
            <h2>Форум кафедры МоЭВМ</h2>
            <div className='navbarRight'>
                <button onClick={signOut}>Войти</button>
            </div>
        </nav>
    );
};

export default Nav;