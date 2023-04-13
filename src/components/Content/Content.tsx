import React, {FC} from 'react';
import styles from "./Content.module.scss"
import searchIcon from "../../assets/img/content/search.svg"
import {Card} from "./Card/Card";
import {IItem} from "../../types/data";
interface IContent {
    items: IItem[]
    onAddCart:(item: IItem) => void
}
export const Content: FC<IContent> = ({items, onAddCart}) => {
    return (
        <div className={styles.content}>
            <div className={styles.contentTop}>
                <h1>Все кроссовки</h1>
                <div className={styles.search}>
                    <img src={searchIcon} alt="Поиск"/>
                    <input placeholder="Поиск..."/>
                </div>
            </div>
            <div className={styles.sneakers}>
                {
                    items.map(item => <Card key={item.name} item={item} onAddCart={onAddCart}/>)
                }
            </div>
        </div>


    );
};

