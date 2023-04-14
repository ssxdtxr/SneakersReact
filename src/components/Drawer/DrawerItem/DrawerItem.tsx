import React, {FC} from 'react';
import styles from "./DrawerItem.module.scss";
import btnDelete from "../../../assets/img/drawer/delete.svg";
import {IItem} from "../../../types/data";
interface IDrawerItem {
    onRemoveItem: (id: string) => void
    item: IItem
}
export const DrawerItem: FC<IDrawerItem>  = ({item, onRemoveItem}) => {
    const {name, price, imageUrl, id} = item
    return (
        <div className={styles.cartItem}>
            <img width={70} height={70} src={imageUrl} alt="Sneaker"/>
            <div>
                <p>{name}</p>
                <b>{price} руб.</b>
            </div>
            <img className={styles.removeBtn} src={btnDelete} onClick={() => onRemoveItem(id || "1")} alt="Удаление"/>
        </div>
    );
};

