import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from './Accordion';

export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action("accordion mode change event fired")
const onClickCallBack = action('some item was clicked')

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} accordionCollapsed={true} setAccordionCollapsed={callback} items={[]} onClick={onClickCallBack} color={'blue'}/>
export const UserUnCollapsedMode = () => <Accordion titleValue={'Users'} accordionCollapsed={false} setAccordionCollapsed={callback} items={[{title:'Dumich', value:1}, {title:'Valera', value:2}, {title:'Artem', value:3},{title:'Victor', value:4}]} onClick={onClickCallBack} color={'red'}/>



export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion
        titleValue={"Users"}
        accordionCollapsed={value}
        setAccordionCollapsed={() =>setValue(!value)}
        items={[
            {title:'Dumich', value:1},
            {title:'Valera', value:2},
            {title:'Artem', value:3},
            {title:'Victor', value:4}
        ]}
        onClick={(id) => {alert(`user with ID ${id} should be happy`)}}
        color={'blue'}
    />
}


