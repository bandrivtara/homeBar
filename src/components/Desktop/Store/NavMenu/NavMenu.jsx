import React from 'react';
import { Link } from 'react-router-dom';

import st from './NavMenu.module.scss';

const NavMenu = (props) => {
    return (
        <div className={st.navPanel}>
            <div className={st.logo}>
                <img src="" alt="" />LOGO
            </div>
            <div className={st.nav}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className={st.user}>
                <div className={st.cart}>
                    <div className={st.search}>[Search]</div>
                    <Link to="/">[count]</Link>
                    <img src="" alt="" />
                </div>
                <div className={st.profile}>
                    <img src="" alt="" />
                    <Link to="/">Profile</Link>
                </div>
            </div>
        </div>
    )
}

export default NavMenu
