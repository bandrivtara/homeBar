import React from 'react';

import st from './Store.module.scss';

import HeaderContainer from './Header/HeaderContainer';
import NavMenu from './NavMenu/NavMenu';
import ContentContainer from './Content/ContentContainer';

const Store = (props) => {
    return (
        <div>
            <NavMenu />
            <HeaderContainer />
            <ContentContainer />
        </div>
    )
}

export default Store;
