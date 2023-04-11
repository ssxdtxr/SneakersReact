import React from 'react';
import styles from "./Content.module.scss"
import sneakerOne from "../../assets/img/sneakers/1.jpg"
import sneakerTwo from "../../assets/img/sneakers/2.jpg"
import sneakerThree from "../../assets/img/sneakers/3.jpg"
import sneakerFour from "../../assets/img/sneakers/4.jpg"
import searchIcon from "../../assets/img/content/search.svg"
import unliked from "../../assets/img/content/unliked.svg"
import plus from "../../assets/img/content/plus.svg"

export const Content = () => {
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
                <div className={styles.card}>
                    <div className={styles.favorite}>
                        <img src={unliked} alt="liked"/>
                    </div>
                    <img width={133} height={112} src={sneakerOne} alt="Кроссовки" />
                    <p>Мужские Кроссовки Nike Air Max 270</p>
                    <div className={styles.cardBottom}>
                        <div className={styles.cardPanel}>
                            <span>Цена:</span>
                            <b>500 000 руб.</b>
                        </div>
                        <img src={plus} alt="Добавть"/>
                    </div>
                </div>
                <div className={styles.card}>
                    <img width={133} height={112} src={sneakerTwo} alt="Кроссовки" />
                    <p>Мужские Кроссовки Nike Air Max 270</p>
                    <div className={styles.cardBottom}>
                        <div className={styles.cardPanel}>
                            <span>Цена:</span>
                            <b>500 000 руб.</b>
                        </div>
                        <img src={plus} alt="Добавть" />
                    </div>
                </div>
                <div className={styles.card}>
                    <img width={133} height={112} src={sneakerThree} alt="Кроссовки" />
                    <p>Мужские Кроссовки Nike Air Max 270</p>
                    <div className={styles.cardBottom}>
                        <div className={styles.cardPanel}>
                            <span>Цена:</span>
                            <b>500 000 руб.</b>
                        </div>
                        <img src={plus} alt="Добавть" />
                    </div>
                </div>
                <div className={styles.card}>
                    <img width={133} height={112} src={sneakerFour} alt="Кроссовки" />
                    <p>Мужские Кроссовки Nike Air Max 270</p>
                    <div className={styles.cardBottom}>
                        <div className={styles.cardPanel}>
                            <span>Цена:</span>
                            <b>500 000 руб.</b>
                        </div>
                        <img src={plus} alt="Добавть" />
                    </div>
                </div>
            </div>
        </div>


    );
};

