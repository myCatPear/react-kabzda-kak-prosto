import React, {useEffect, useState} from 'react';
import {AnalogClockView} from "./AnalogClockView";
import { DigitalClockView } from './DigitalClockView';

type ClockPropsType = {
    mode?:"digital" | "analog"
}

export const Clock: React.FC<ClockPropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const itervalID = setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(itervalID)
        }
    },[])

    let view

    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>
            break;
        case 'digital':
        default:
            view = <DigitalClockView date={date}/>
    }

    return (
        <div>
            {view}
        </div>
    );
};

export type DigitalClockViewType = {
    date:Date
}

