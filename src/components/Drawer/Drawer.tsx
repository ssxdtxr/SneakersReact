import React from 'react';
import styles from "./Drawer.module.scss"
import sneakerOne from "../../assets/img/sneakers/1.jpg"
import btnDelete from "../../assets/img/drawer/delete.svg"
import arrow from "./../../assets/img/drawer/arrow.svg"

export const Drawer = () => {
    return (
        <div className={styles.overlay}>
            <div className={styles.drawer}>
                <h3>Корзина</h3>
                <div className={styles.items}>
                    <div className={styles.cartItem}>
                        <img width={70} height={70} src={sneakerOne} alt="Sneaker"/>
                        <div>
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>500 000 руб.</b>
                        </div>
                        <img className={styles.removeBtn} src={btnDelete} alt="Удаление"/>
                    </div>
                </div>
                <div className={styles.total}>
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>500 000руб</b>
                        </li>
                    </ul>
                    <button>Офорить заказ <img src={arrow} alt="Arrow"/></button>
                </div>

            </div>
        </div>
    );
};

