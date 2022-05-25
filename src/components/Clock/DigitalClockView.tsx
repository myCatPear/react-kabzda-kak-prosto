import React from "react";
import {DigitalClockViewType} from "./Clock";

const get2DigitsStrings = (number: number) => number < 10 ? '0' + number : number

export const DigitalClockView: React.FC<DigitalClockViewType> = (props) => {
    const {date} = props
    return <>
        <span>
                {get2DigitsStrings(date.getHours())}
            </span>
        :
        <span>
            {get2DigitsStrings(date.getMinutes())}
            </span>
        :
        <span>
              {get2DigitsStrings(date.getSeconds())}
            </span>
    </>
}