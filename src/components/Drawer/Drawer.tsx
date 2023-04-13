import React, {FC} from 'react';
import styles from "./Drawer.module.scss"
import btnDelete from "../../assets/img/drawer/delete.svg"
import arrow from "./../../assets/img/drawer/arrow.svg"
import {IItem} from "../../types/data";
import {DrawerItem} from "./DrawerItem/DrawerItem";

interface IDrawer {
    onCloseCart: () => void
    cartItems: IItem[]
}
export const Drawer: FC<IDrawer> = ({onCloseCart, cartItems}) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.drawer} >
                <div className={styles.topDrawer}>
                    <h3>Корзина</h3>
                    <img onClick={onCloseCart} src={btnDelete} alt="Закрыть drawer"/>
                </div>
                <div className={styles.items}>
                    {
                        cartItems.map(item => <DrawerItem key={item.name} item={item}/>)
                    }
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

