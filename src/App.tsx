import React, {useEffect, useState} from 'react';
import {Header} from "./components/Header/Header";
import {Container} from "./UI/Container/Container";
import {Content} from "./components/Content/Content";
import {Drawer} from "./components/Drawer/Drawer";
import {IItem} from "./types/data";
import axios from "axios";


const App = () => {
    const [cartOpened, setCartOpened] = useState<boolean>(false)
    const [items, setItems] = useState<IItem[]>([])
    const [cartItems, setCartItems] = useState<IItem[]>([])
    const [searchValue, setSearchValue] = useState<string>('')
    const getSneakers = async () => {
        const response = await axios.get('https://6437d225894c9029e8c6e252.mockapi.io/items')
        setItems(response.data)
    }

    const getSneakersToCart = async () => {
        const response = await axios.get('https://6437d225894c9029e8c6e252.mockapi.io/cart')
        setCartItems(response.data)
    }

    useEffect(() => {
        getSneakers()
        getSneakersToCart()
    }, [])

    const onAddCart = (item: IItem) => {
        axios.post('https://6437d225894c9029e8c6e252.mockapi.io/cart', item)
        setCartItems(prev => [...prev, item])
    }

    const onRemoveItem = (id: string) => {
        axios.delete(`https://6437d225894c9029e8c6e252.mockapi.io/cart/${id}`)
        setCartItems(prev => prev.filter(item => item.id !== id))
    }

    return (
    <Container>
        {
            cartOpened && <Drawer cartItems={cartItems} onCloseCart={() => setCartOpened(false)} onRemoveItem={onRemoveItem}/>
        }
        <Header onClickCart={() => setCartOpened(true)}/>
        <Content items={items} onAddCart={onAddCart} searchValue={searchValue} setSearchValue={setSearchValue}/>
    </ Container>
  );
}

export default App;
