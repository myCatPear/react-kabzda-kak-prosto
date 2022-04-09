import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from './UncontrolledOnOff';

const callback = action("on or off clicked")


export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
}

export const offMode = () => <UncontrolledOnOff onChange={callback} defaultOn={false}/>
export const onMode = () => <UncontrolledOnOff onChange={callback} defaultOn={true}/>
export const BugMode = () => <div>Unsync when change defaultValue when already rendered</div>




