import React, { FC} from 'react';
import styles from "./Content.module.scss"
import searchIcon from "../../assets/img/content/search.svg"
import {Card} from "./Card/Card";
import {IItem} from "../../types/data";
interface IContent {
    items: IItem[]
    onAddCart: (item: IItem) => void
    searchValue: string
    setSearchValue: (value: string) => void
}
export const Content: FC<IContent> = ({items, onAddCart, setSearchValue, searchValue}) => {
    const onChangeSearchInput= (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    }
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            setSearchValue('')
        }
    }
    return (
        <div className={styles.content}>
            <div className={styles.contentTop}>
                {
                    searchValue ?
                        <h1>Поиск по запросу: "{searchValue}"</h1>
                        :
                        <h1>Все кроссовки</h1>
                }
                <div className={styles.search}>
                    <img src={searchIcon} alt="Поиск"/>
                    <input placeholder="Поиск..." value={searchValue} onChange={onChangeSearchInput} onKeyDown={handleKeyDown}/>
                </div>
            </div>
            <div className={styles.sneakers}>
                {
                    items.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => <Card key={index} item={item} onAddCart={onAddCart}/>)
                }
            </div>
        </div>


    );
};

