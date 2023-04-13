import React, {FC} from 'react';
import styles from "./DrawerItem.module.scss";
import btnDelete from "../../../assets/img/drawer/delete.svg";
import {IItem} from "../../../types/data";
interface IDrawerItem {
    item: IItem
}
export const DrawerItem:FC<IDrawerItem>  = ({item}) => {
    const {name, price, imageUrl} = item
    return (
        <div className={styles.cartItem}>
            <img width={70} height={70} src={imageUrl} alt="Sneaker"/>
            <div>
                <p>{name}</p>
                <b>{price} руб.</b>
            </div>
            <img className={styles.removeBtn} src={btnDelete} alt="Удаление"/>
        </div>
    );
};

