import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Raiting/Raiting";
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";
import OnOff from "./components/OnOff/OnOff";
import UnControlledAccordion from "./components/UncontrolledAccordion/UnControlledAccordion";
import UncontrolledRating from "./components/UncontrolledRaiting/UncontrolledRaiting";
import User from "./06-callback/06_callback";

function App() {

    return (
        <div className="App">
            <Accordion title={'Menu'} collapsed={true}/>
            <Accordion title={'Yo'} collapsed={false}/>
            <Rating value={3}/>
            <OnOff value={true}/>
            <UnControlledAccordion title={'Uncontrolled accordion'}/>
            <UncontrolledRating />
         {/*<User/>*/}
        </div>
    );
}

export default App;
