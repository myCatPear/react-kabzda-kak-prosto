import React from "react";
import {DigitalClockViewType} from "./Clock";
import style from './AnalogClock.module.css'

export const AnalogClockView: React.FC<DigitalClockViewType> = (props) => {
    const {date} = props
    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };
    return <>
        <div className={style.clock}>
            <h3>Clock</h3>
            <div className={style["analog-clock"]}>
                <div className={`${style.dial} ${style.seconds}`} style={secondsStyle} />
                <div className={`${style.dial} ${style.minutes}`} style={minutesStyle} />
                <div className={`${style.dial} ${style.hours}`} style={hoursStyle} />
            </div>
        </div>
    </>
}