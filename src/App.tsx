import React from 'react';
import {Header} from "./components/Header/Header";
import {Container} from "./UI/Container/Container";
import {Content} from "./components/Content/Content";
import {Drawer} from "./components/Drawer/Drawer";

const App = () => {
  return (
    <Container>
        <Drawer />
        <Header />
        <Content />
    </ Container>
  );
}

export default App;
