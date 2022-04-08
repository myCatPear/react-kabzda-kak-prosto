import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";

import {Accordion} from './Accordion';
import { items1 } from '../../App';


export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action("on or off clicked")

export const DeliveryCollapsedMode = () => <Accordion titleValue={'menu'} accordionCollapsed={true} setAccordionCollapsed={callback} items={items1} onClick={callback} color={'blue'}/>
export const StudentUnCollapsedMode = () => <Accordion titleValue={'menu'} accordionCollapsed={false} setAccordionCollapsed={callback} items={items1} onClick={callback} color={'blue'}/>



export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={"Users"} accordionCollapsed={value} setAccordionCollapsed={() =>setValue(!value)} items={items1} onClick={callback} color={'blue'}/>
}


