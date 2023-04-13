import React, {useEffect, useState} from 'react';
import {Header} from "./components/Header/Header";
import {Container} from "./UI/Container/Container";
import {Content} from "./components/Content/Content";
import {Drawer} from "./components/Drawer/Drawer";
import {IItem} from "./types/data";


const App = () => {
    const [cartOpened, setCartOpened] = useState<boolean>(false)
    const [items, setItems] = useState<IItem[]>([])
    const [cartItems, setCartItems] = useState<IItem[]>([])

    const getSneakers = async () => {
        const response = await fetch('https://6437d225894c9029e8c6e252.mockapi.io/items');
        const data = await response.json()
        setItems(data)
    }

    useEffect(() => {
        getSneakers()
    }, [])

    const onAddCart = (item: IItem) => {
        setCartItems(prev => [...prev, item])
    }
    console.log(cartItems)


    return (
    <Container>
        {
            cartOpened && <Drawer cartItems={cartItems} onCloseCart={() => setCartOpened(false)}/>
        }
        <Header onClickCart={() => setCartOpened(true)}/>
        <Content items={items} onAddCart={onAddCart}/>
    </ Container>
  );
}

export default App;
