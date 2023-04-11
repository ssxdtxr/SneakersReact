import React from 'react';
import styles from "./Header.module.scss"
import logo from "../../assets/img/header/logo.svg"
import cart from "../../assets/img/header/cart.svg"
import user from "../../assets/img/header/user.svg"

export const Header = () => {
    return (
        <header>
            <div className={styles.headerLeft}>
                <img width={40} height={40} src={logo} alt="Логотип" />
                <div>
                    <h3>React Sneakers</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className={styles.headerRight}>
                <li>
                    <img width={18} height={18} src={cart} alt="Корзина" />
                    <span>1200 руб.</span>
                </li>
                <li>
                    <img width={18} height={18} src={user} alt="Пользоваетель" />
                </li>
            </ul>
        </header>
    );
};

