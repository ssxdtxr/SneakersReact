import React, {FC, useState} from 'react';
import unliked from "../../../assets/img/content/unliked.svg";
import plus from "../../../assets/img/content/plus.svg";
import styles from "./Card.module.scss";
import check from "../../../assets/img/content/checked.svg"
import {IItem} from "../../../types/data";

interface ICard {
    item: IItem
    onAddCart:(item: IItem) => void

}
export const Card: FC<ICard> = ({item, onAddCart}) => {
    const {name, price, imageUrl} = item
    const [isAdded, setIsAdded] = useState<boolean>(false)

    const onClickAdd = () => {
        onAddCart(item)
        setIsAdded(!isAdded)
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src={unliked} alt="liked"/>
            </div>
            <img width={133} height={112} src={imageUrl} alt="Кроссовки" />
            <p>{name}</p>
            <div className={styles.cardBottom}>
                <div className={styles.cardPanel}>
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img onClick={onClickAdd} className={styles.plus} src={!isAdded ? plus : check} alt="Лайкнули"/>
            </div>
        </div>
    );
};

