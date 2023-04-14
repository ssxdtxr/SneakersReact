import React, {FC} from 'react';
import styles from "./Drawer.module.scss"
import btnDelete from "../../assets/img/drawer/delete.svg"
import arrow from "./../../assets/img/drawer/arrow.svg"
import {IItem} from "../../types/data";
import {DrawerItem} from "./DrawerItem/DrawerItem";
import DrawerEmpty from "../../assets/img/drawer/drawer-empty.png"
import ArrowEmpty from "../../assets/img/drawer/arrow-drawer-empty.png"

interface IDrawer {
    onCloseCart: () => void
    onRemoveItem: (id: string) => void
    cartItems: IItem[]
}
export const Drawer: FC<IDrawer> = ({onCloseCart, cartItems, onRemoveItem}) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.drawer} >
                <div className={styles.topDrawer}>
                    <h2>Корзина</h2>
                    <img onClick={onCloseCart} src={btnDelete} alt="Закрыть drawer"/>
                </div>
                {
                    !cartItems.length ?
                        <div className={styles.drawerEmpty}>
                            <img width={120} height={120} src={DrawerEmpty} alt=""/>
                            <h2>Корзина пустая</h2>
                            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                            <button onClick={onCloseCart} className={styles.btnDrawerEmpty}>
                                <img src={ArrowEmpty} alt=""/>
                                Вернуться назад
                            </button>
                        </div>
                        :
                        <>
                            <div className={styles.items}>
                                {
                                    cartItems.map((item, index) => <DrawerItem key={index} item={item} onRemoveItem={onRemoveItem}/>)
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
                        </>
                }
            </div>
        </div>
    );
};

