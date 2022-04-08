import React from 'react';
import {action} from "@storybook/addon-actions";
import {UncontrolledAccordion } from './UncontrolledAccordion';

const callback = action("on or off clicked")


export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
}

export const ModeChanging = () => <UncontrolledAccordion titleValue={'x'}/>


