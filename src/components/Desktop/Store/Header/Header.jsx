import React from 'react';
import st from './Header.module.scss';
import { Switch, Route } from 'react-router-dom';

import PromoItemsContainer from './PromoItemsContainer/PromoItemsContainer';


const Header = (props) => {
    return (
        <div className={st.container}>
            <div className={st.category}>

            </div>
            <div className={st.main}>
                <Switch>
                    <Route exact path="/">
                        <PromoItemsContainer />
                    </Route>
                    <Route path="/item">
                        {/* <SingleItemContainer /> */}
                    </Route>
                </Switch>
            </div>
            <div className={st.category}>

            </div>
        </div>
    )
}

export default Header
