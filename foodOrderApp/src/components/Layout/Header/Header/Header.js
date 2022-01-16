import React from 'react';
import classes from './Header.module.css';

import mealsImage from './../../../../assets/meals.jpg'
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';

const Header = (props) => {

    return <React.Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='meals images' />
        </div>
    </React.Fragment>

}

export default Header;